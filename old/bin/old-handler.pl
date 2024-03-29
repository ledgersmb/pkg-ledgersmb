######################################################################
# LedgerSMB Accounting and ERP

# http://www.ledgersmb.org/
#
# Copyright (C) 2006
# This work contains copyrighted information from a number of sources all used
# with permission.
#
# This file contains source code included with or based on SQL-Ledger which
# is Copyright Dieter Simader and DWS Systems Inc. 2000-2005 and licensed
# under the GNU General Public License version 2 or, at your option, any later
# version.  For a full list including contact information of contributors,
# maintainers, and copyright holders, see the CONTRIBUTORS file.
#
# Original Copyright Notice from SQL-Ledger 2.6.17 (before the fork):
# Copyright (C) 2001
#
#  Author: Dieter Simader
#   Email: dsimader@sql-ledger.org
#     Web: http://www.sql-ledger.org
#
#  Contributors:
#
#
#
# This program is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
# You should have received a copy of the GNU General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
#######################################################################
#
# this script is the frontend called from old/bin/$terminal/$script
# all the accounting modules are linked to this script which in
# turn execute the same script in old/bin/$terminal/
#
#######################################################################

package lsmb_legacy;
use Digest::MD5;
use Try::Tiny;

$| = 1;

binmode (STDIN, ':utf8');
binmode (STDOUT, ':utf8');
use LedgerSMB;
use LedgerSMB::User;
use LedgerSMB::Form;
use LedgerSMB::Locale;
use LedgerSMB::App_State;
use LedgerSMB::Middleware::RequestID;
use LedgerSMB::Sysconfig;

use Data::UUID;
use Log::Log4perl;

$form = Form->new;
# name of this script
my $script;
$uri = $ENV{REQUEST_URI};
$uri =~ s/\?.*//;
$ENV{SCRIPT_NAME} = $uri;
$ENV{SCRIPT_NAME} =~ m/([^\/\\]*.pl)\?*.*$/;
$script = $1;
$script =~ m/(.*)\.pl/;
my $script_module = $1;

$form->{action} = $form->{nextsub} if (!$form->{action} and $form->{nextsub});


#make logger available to other old programs
our $logger=Log::Log4perl->get_logger("lsmb.$script_module.$form->{action}");
local $SIG{__WARN__} = sub {
    my $msg = shift;

    local $Log::Log4perl::caller_depth = $Log::Log4perl::caller_depth + 1;
    $msg =~ s/\n/\\n/g;
    $logger->warn($msg);
};

print 'Set-Cookie: '
    . $form->{"request.download-cookie"} . '=downloaded' . "\n"
    if $form->{"request.download-cookie"};


$locale = LedgerSMB::Locale->get_handle( ${LedgerSMB::Sysconfig::language} )
  or $form->error( __FILE__ . ':' . __LINE__ . ": Locale not loaded: $!\n" );


# we use $script for the language module
$form->{script} = $script;

# strip .pl for translation files
$script =~ s/\.pl//;

# pull in DBI
use DBI qw(:sql_types);

# locale messages
#$form->{charset} = $locale->encoding;
$form->{charset} = 'UTF-8';
$locale->encoding('UTF-8');

try {
    $form->db_init( \%myconfig );
my $path = ($ENV{SCRIPT_NAME} =~ s|[^/]*$||r);
    print 'Set-Cookie: '
        . LedgerSMB::Sysconfig::cookie_name . '='
        . $form->{_new_session_cookie_value} . "; path=$path\n"
        if $form->{_new_session_cookie_value};

    # we get rid of myconfig and use User as a real object
    %myconfig = %{ LedgerSMB::User->fetch_config( $form ) };
    $LedgerSMB::App_State::User = \%myconfig;
    map { $form->{$_} = $myconfig{$_} } qw(stylesheet timeout)
        unless ( $form->{type} eq 'preferences' );

    if ($myconfig{language}){
        $locale   = LedgerSMB::Locale->get_handle( $myconfig{language} )
            or _error($form, __FILE__ . ':' . __LINE__
                       . ": Locale not loaded: $!\n" );
    }

    $LedgerSMB::App_State::Locale = $locale;
    # pull in the main code
    $logger->trace("requiring old/bin/$form->{script}");
    require "old/bin/$form->{script}";

    # customized scripts
    if ( -f "old/bin/custom/$form->{script}" ) {
        eval { require "old/bin/custom/$form->{script}"; };
    }

    # customized scripts for login
    if ( -f "old/bin/custom/$form->{login}_$form->{script}" ) {
        eval { require "old/bin/custom/$form->{login}_$form->{script}"; };
    }

    if ( $form->{action} ) {
        $logger->trace("action $form->{action}");

        binmode STDOUT, ':utf8';
        binmode STDERR, ':utf8';
        # window title bar, user info
        $form->{titlebar} =
            "LedgerSMB "
            . $locale->text('Version')
            . " $form->{version} - $myconfig{name} - $myconfig{dbname}";

        &{ $form->{action} };
        LedgerSMB::App_State::cleanup();

    }
    else {
        $form->error( __FILE__ . ':' . __LINE__ . ': '
                      . $locale->text('action not defined!'));
    }
}
catch  {
  # We have an exception here because otherwise we always get an exception
  # when output terminates.  A mere 'die' will no longer trigger an automatic
  # error, but die 'foo' will map to $form->error('foo')
  # -- CT
    $form->{_error} = 1;
    $LedgerSMB::App_State::DBH = undef;
    _error($form, "'$_'") unless $_ =~ /^Died/i or $_ =~ /^exit at /;
    LedgerSMB::App_State::cleanup();
};

$logger->trace("leaving after script=old/bin/$form->{script} action=$form->{action}");#trace flow

$form->{dbh}->commit if defined $form->{dbh};
$form->{dbh}->disconnect()
    if defined $form->{dbh};

# end


sub _error {
    my ($form, $msg, $status) = @_;
    $msg = "? _error" if !defined $msg;
    $status = 500 if ! defined $status;

    print qq|Status: $status ISE
Content-Type: text/html; charset=utf-8

<html>
<body><h2 class="error">Error!</h2> <p><b>$msg</b></p>
<p>dbversion: $form->{dbversion}, company: $form->{company}</p>
</body>
</html>
|;

    local $Log::Log4perl::caller_depth = $Log::Log4perl::caller_depth + 1;
    $msg =~ s/\n/\\n/g;
    $logger->error($msg);
}


1;

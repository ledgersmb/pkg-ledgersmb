=head1 NAME

LedgerSMB::Scripts::template - Template editing workflows for LedgerSMB

=cut

package LedgerSMB::Scripts::template;

use strict;
use warnings;

use LedgerSMB::Template::DB;
use LedgerSMB::Report::Listings::Templates;
use LedgerSMB::Template;
use LedgerSMB::App_State;

=head1 SYNPOSIS

To display the edit screen1

   LedgerSMB::Scripts::template::display($request)

To edit:

   LedgerSMB::Scripts::template::edit($request)

=head1 FUNCTIONS

=head2 list($request)

Lists the templates.

=cut

sub list {
    my ($request) = @_;
    return LedgerSMB::Report::Listings::Templates->new(%$request)
        ->render($request);
}

=head2 display($request)

Displays a template for review

=cut

sub display {
    my ($request) = @_;
    my $dbtemp;
    local $@ = undef;
    eval {$dbtemp = LedgerSMB::Template::DB->get(%$request)};

    $dbtemp->{content} = $dbtemp->template if defined $dbtemp;
    $dbtemp = $request unless $dbtemp->{format};
    $dbtemp->{languages} =
        [ LedgerSMB->call_procedure(funcname => 'person__list_languages') ];
    return LedgerSMB::Template->new(
        user     => $request->{_user},
        locale   => $request->{_locale},
        path     => 'UI/templates',
        template => 'preview',
        format   => 'HTML'
    )->render({ request => $request,
                template => $dbtemp,
                %$dbtemp });
}

=head2 edit($request)

Displays a screen for editing the template

=cut

sub edit {
    my ($request) = @_;
    my $dbtemp;

    local $@ = undef;
    $dbtemp = eval { LedgerSMB::Template::DB->get(%$request) } ;
    delete $request->{language_code}
        unless $dbtemp;
    $dbtemp = eval { LedgerSMB::Template::DB->get(%$request) }
        unless $dbtemp;

    die $LedgerSMB::App_State::Locale->text('Template Not Found')
       unless $dbtemp;
    $dbtemp->{content} = $dbtemp->template;
    $dbtemp = $request unless $dbtemp->{format};
    $dbtemp->{languages} =
        [ LedgerSMB->call_procedure(funcname => 'person__list_languages') ];

    return LedgerSMB::Template->new(
        user     => $request->{_user},
        locale   => $request->{_locale},
        path     => 'UI/templates',
        template => 'edit',
        format   => 'HTML'
    )->render({ request => $request,
                        to_edit => $dbtemp });
}

=head2 save($request)

Saves the template.

=cut

sub save {
    my ($request) = @_;
    my $dbtemp = LedgerSMB::Template::DB->new(%$request);
    $dbtemp->save();
    return display($request);
}

=head2 upload($request)

Sends the file as an upload.  The template_name and format must match before it
will be accepted.

=cut

sub upload {
    my ($request) = @_;

    my $upload = $request->{_uploads}->{template_file}
        or die 'No template file uploaded';

    # Slurp uploaded file
    open my $fh, '<', $upload->path or die "Error opening uploaded file $!";
    local $/ = undef;
    my $fdata = <$fh>;

    # Sanity check that browser-provided local name of uploaded file matches
    # the template name and extension. Is this appropriate/necessary?
    die 'No content' unless $fdata;
    my $testname = $request->{template_name} . '.' . $request->{format};
    die LedgerSMB::App_State::Locale->text(
                'Unexpected file name, expected [_1], got [_2]',
                 $testname, $upload->basename)
          unless $upload->basename eq $testname;
    $request->{template} = $fdata;
    my $dbtemp = LedgerSMB::Template::DB->new(%$request);
    $dbtemp->save();

    return display($request);
}

=head1 COPYRIGHT

Copyright (C) 2014-2018 The LedgerSMB Core Team.

This file may be re-used under the terms of the GNU General Public License
version 2 or at your option any later version.  Please see the included
LICENSE.txt for details.

=cut

1;

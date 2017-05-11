#!/bin/bash
# Configure the LedgerSMB database administrator user 
#
# Copyright (C) 2015-2017 Robert James Clay <jame@rocasa.us>
#
# This file is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.
#
# This file is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#

# First parameter is the user name
LSMBDBUSER="$1"
# Second parameter is the password
LSMBDBPW="$2"

su - postgres -c psql <<EOT
DO
\$\$
DECLARE num_users integer;
BEGIN
    SELECT count(*)
        into num_users
    FROM pg_roles
    WHERE rolname = '$LSMBDBUSER';

    IF num_users = 0 THEN
        CREATE ROLE "$LSMBDBUSER" WITH SUPERUSER LOGIN NOINHERIT ENCRYPTED PASSWORD '$LSMBDBPW';
    ELSE
        ALTER ROLE "$LSMBDBUSER" WITH SUPERUSER LOGIN NOINHERIT ENCRYPTED PASSWORD '$LSMBDBPW';
    END IF;
END
\$\$
;
EOT

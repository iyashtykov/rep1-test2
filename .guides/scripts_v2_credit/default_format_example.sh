#!/bin/bash
set -e


POINTS=$(( ( RANDOM % 100 )  + 1 ))
curl --retry 3 -s "$CODIO_AUTOGRADE_V2_URL" -d grade=$POINTS -d feedback='<div>not HTML and not # markdown</div>' -d extra_credit=$POINTS
#!/bin/bash
set -e

# env

POINTS=$(( ( RANDOM % 100 )  + 1 ))
curl --retry 3 -s "$CODIO_AUTOGRADE_V2_URL" -d grade=$POINTS -d format=html -d feedback='<div>HTML text here</div>' -d extra_credit=$POINTS
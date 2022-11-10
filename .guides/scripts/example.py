#!/usr/bin/env python

import os
import random
import json
import datetime

# import grade submit function
import sys
sys.path.append('/usr/share/codio/assessments')
from lib.grade import send_grade

####################
# Helper functions #
####################


# Get the url to send the results to
CODIO_AUTOGRADE_URL = os.environ["CODIO_AUTOGRADE_URL"]
CODIO_UNIT_DATA = os.environ["CODIO_AUTOGRADE_ENV"]

def main():
  # Execute the test on the student's code
  grade = validate_code()
  # Send the grade back to Codio with the penatly factor applied
  res = send_grade(int(round(grade)))
  print(CODIO_UNIT_DATA)
  exit( 0 if res else 1)

##########################################
# You only need to modify the code below #
##########################################

# Your actual test logic 
# Our demo function is just generating some random score
def validate_code():
  return random.randint(10, 100)

main()

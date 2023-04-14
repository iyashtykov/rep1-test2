#!/usr/bin/env python
import os
import random
import json
# import grade submit function
import sys
sys.path.append('/usr/share/codio/assessments')
from lib.grade import send_grade_v2, FORMAT_V2_MD, FORMAT_V2_HTML, FORMAT_V2_TXT
CODIO_UNIT_DATA = os.environ["CODIO_AUTOGRADE_ENV"]
def main():
  # Execute the test on the student's code
  grade = random.randint(10, 100)
  
  feedback = '<html> html text </html>'   
  # file_name = '/home/codio/workspace/read.html'  
  # with open(file_name, 'r') as file:
  #   feedback = file.read()
  
  
  # Send the grade back to Codio with the penatly factor applied
  
  res = send_grade_v2(int(round(grade)), feedback, extra_credit=int(round(grade)))
  print(CODIO_UNIT_DATA)
  exit( 0 if res else 1)
  
main()
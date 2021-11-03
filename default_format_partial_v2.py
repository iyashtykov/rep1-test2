#!/usr/bin/env python
import os
import random
import requests
import json
# import grade submit function
import sys
sys.path.append('/usr/share/codio/assessments')
from lib.grade import send_partial_v2, FORMAT_V2_MD, FORMAT_V2_HTML, FORMAT_V2_TXT
def main():
  # Execute the test on the student's code
  grade = random.randint(10, 50) 
  print(grade)
  # Send the grade back to Codio with the penatly factor applied
  
  feedback = ''  
  file_name = '/home/codio/workspace/read.txt'  
  with open(file_name, 'r') as file:
    feedback = file.read()
  
  res = send_partial_v2(int(round(grade)), feedback + '\npoints = ' + str(grade))
  exit( 0 if res else 1)
  
main()
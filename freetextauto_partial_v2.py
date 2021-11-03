#!/usr/bin/env python
import os, requests, sys
import random

text = os.environ['CODIO_FREE_TEXT_ANSWER']
sys.path.append('/usr/share/codio/assessments')
from lib.grade import send_partial_v2, FORMAT_V2_MD, FORMAT_V2_HTML, FORMAT_V2_TXT

def main():
  grade = int(text)  
  feedback = '## ' + text + ' points' 
  print('hello')
  res = send_partial_v2(int(round(grade)), feedback, FORMAT_V2_MD)
  exit( 0 if res else 1)
  
main()
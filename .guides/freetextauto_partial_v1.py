#!/usr/bin/env python
import os, sys
import random
text = os.environ['CODIO_FREE_TEXT_ANSWER']
sys.path.append('/usr/share/codio/assessments')
from lib.grade import send_partial

def main():  
  grade = int(text)  
  feedback = text + ' points'  
  print(feedback)  
  res = send_partial(int(round(grade)))
  exit( 0 if res else 1)

main()
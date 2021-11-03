#!/usr/bin/env python
import os, requests, sys
import random

text = os.environ['CODIO_FREE_TEXT_ANSWER']

def main(): 
  print('hello')
  if text == 'yes':
    exit(0)      
  else:
    exit(1)  

main()
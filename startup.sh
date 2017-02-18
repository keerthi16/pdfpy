#!/usr/bin/env bash
OS="`uname`"
case $OS in
  'Linux')
    OS='Linux'
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    pip install pdfkit
    pip install simplejson
    ;;
  'FreeBSD')
    OS='FreeBSD'
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    pip install pdfkit
    pip install simplejson
    ;;
  'CentOS')
    OS='CentOS'
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    pip install pdfkit
    pip install simplejson
    ;;
  'WindowsNT')
    OS='Windows'
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    pip install pdfkit
    pip install simplejson
    ;;
  'Darwin')
    OS='Mac'
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    pip install pdfkit
    pip install simplejson
    ;;
  'SunOS')
    OS='Solaris'
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    pip install pdfkit
    pip install simplejson
    ;;
  'AIX') ;;
  *) ;;
esac
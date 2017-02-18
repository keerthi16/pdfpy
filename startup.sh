#!/usr/bin/env bash
OS="`uname`"
case $OS in
  'Linux')
    OS='Linux'
    sudo apt-get update
    apt-get install python -y
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    pip install pdfkit
    pip install simplejson
    ;;
  'FreeBSD')
    OS='FreeBSD'
    sudo pkg update
    pkg install python -y
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    pip install pdfkit
    pip install simplejson
    ;;
  'CentOS')
    OS='CentOS'
    sudo yum update
    sudo yum install python -y
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    pip install pdfkit
    pip install simplejson
    ;;
  'WindowsNT')
    OS='Windows'
    cd
    wget http://ftp.gnu.org/gnu/wget/wget-latest.tar.gz
    tar -xzf wget-latest.tar.gz
    cd wget-latest
    ./configure --prefix=$HOME
    make && make install
    wget https://www.python.org/ftp/python/3.6.0/Python-3.6.0.tgz
    tar xfz Python-3.6.0.tgz
    cd Python-3.6.0
    cd ./configure
    make
    make install
    exit
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    pip install pdfkit
    pip install simplejson
    ;;
  'Darwin')
    OS='Mac'
    ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
    brew install python
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    pip install pdfkit
    pip install simplejson
    ;;
  'SunOS')
    OS='Solaris'
    pkg update
    pkg install python -y
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    python get-pip.py
    pip install pdfkit
    pip install simplejson
    ;;
  'AIX') ;;
  *) ;;
esac
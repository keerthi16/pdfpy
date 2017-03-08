#!/usr/bin/env bash
OS="`uname`"
case $OS in
  'Linux')
    OS='Linux'
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    sudo python get-pip.py
    sudo apt update
    sudo apt install wkhtmltopdf
    sudo apt-get install -y openssl build-essential xorg libssl-dev
    wget http://download.gna.org/wkhtmltopdf/0.12/0.12.3/wkhtmltox-0.12.3_linux-generic-amd64.tar.xz
    tar -xJf wkhtmltox-0.12.3_linux-generic-amd64.tar.xz
    cd wkhtmltox
    sudo chown root:root bin/wkhtmltopdf
    sudo cp -r * /usr/
    sudo pip install pdfkit
    sudo pip install simplejson
    ;;
  'FreeBSD')
    OS='FreeBSD'
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    sudo python get-pip.py
    sudo pip install pdfkit
    sudo pip install simplejson
    ;;
  'CentOS')
    OS='CentOS'
    curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
    sudo python get-pip.py
    sudo pip install pdfkit
    sudo pip install simplejson
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
    sudo python get-pip.py
    sudo pip install pdfkit
    sudo pip install simplejson
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
#!/usr/bin/env bash
apt-get update
apt-get install python -y
curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
python get-pip.py
pip install pdfkit
@ECHO OFF
curl "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"
python get-pip.py
pip install pdfkit
pip install simplejson
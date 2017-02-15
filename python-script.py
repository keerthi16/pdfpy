import pdfkit
import sys

print(sys.argv[1])
try:
    pdfkit.from_file(sys.argv[1], 'out.pdf')
except Error as e:
    print(e)

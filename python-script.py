import pdfkit
import sys
import json

try:
    input = sys.argv[1]
except IOError as error:
    print(error)
    print("Missing input file")
    sys.exit()

try:
    output = sys.argv[2]
except IOError as error:
    print(error)
    print("Output path undefined")
    sys.exit()

try:
    type = sys.argv[3]
except IOError as error:
    print(error)
    sys.exit()

try:
    options = sys.argv[4]
except IOError as error:
    print(error)
    sys.exit()

class Path:
    def __init__(self, input, output, setting):
        self._i = input
        self._o = output
        self._opt = setting
    
    def from_file(self):
        try:
            if (self._opt != "false"):
                self._opt = json.loads(self._opt)
                pdfkit.from_file(self._i, self._o, options=self._opt)
            else:
                pdfkit.from_file(self._i, self._o)
        except IOError as error:
            print(error)

    def from_url(self):
        try:
            if (self._opt != "false"):
                self._opt = json.loads(self._opt)
                pdfkit.from_url(self._i, self._o, options=self._opt)
            else:
                pdfkit.from_url(self._i, self._o)
        except IOError as error:
            print(error)

def main():
    render = Path(input, output, options)
    if type == "true":
        render.from_file()
    else:
        render.from_url()


if __name__ == "__main__": main()

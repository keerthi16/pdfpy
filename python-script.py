import pdfkit
import sys

try:
    input = sys.argv[1]
except:
    print("Missing input file")
    sys.exit()

try:
    output = sys.argv[2]
except:
    print("Missing output file")
    sys.exit()


def main():
    try:
        pdfkit.from_file(input, output)
    except IOError as error:
        print (error)

if __name__ == "__main__": main()

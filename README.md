# HTML to PDF

Convert HTML to PDF simple and fast

```
sudo npm install pdfpy
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you have to get a development env running

## Install latest node and npm
```
https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
```

### Require

```
var pdfpy = require('pdfpy');

```

### Types (file and url)

```

//To generate pdf from file
pdfpy.file()

```

```
//To generate pdf from url
pdfpy.url()

```

### Example

```
var pdfpy = require('pdfpy');

var data = {
    //the key as to be same as below
    input: "./test.html",
    output: "./output.pdf"
}
pdfpy.file(data, function(err, res) {
    if(err) throw err

    if(res) console.log("success")
});
```

### Using Options

```
var pdfpy = require('pdfpy');

var data = {
    //the key as to be same as below
    input: "./test.html",
    output: "./output.pdf",
    options: {
        'page-size': 'Letter',
        'margin-top': '0.75in',
        'margin-right': '0.75in',
        'margin-bottom': '0.75in',
        'margin-left': '0.75in',
    }
}

pdfpy.file(data, function(err, res) {
    if(err) throw err

    if(res) console.log("success")
});

```

## Running the tests

Explain how to run the automated tests for this system

## Built With

pdfkit 0.6.1 python package

## Authors

```
KiKe ( kike.co.in )

Keerthi Niranjan <keerthiniranjan16@gmail.com> <keerthi@kike.co.in>
Kiran Niranjan <kiranleo1992@gmail.com> <kiran@kike.co.in>

```


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspiration
* etc

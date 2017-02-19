# HTML to PDF
[![Build Status](https://travis-ci.org/keerthi16/pdfpy.svg?branch=master)](https://travis-ci.org/keerthi16/pdfpy)
[![npm version](https://badge.fury.io/js/pdfpy.svg)](https://badge.fury.io/js/pdfpy)

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

### Dependency

* Python
* pdfkit
* simplejson

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


#### File
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

#### URL
```
var pdfpy = require('pdfpy');

var data = {
    //the key as to be same as below
    input: "http://google.com",
    output: "./output.pdf"
}
pdfpy.url(data, function(err, res) {
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
KiKe [KiKe.co.in](http://kike.co.in)
```
Keerthi Niranjan <keerthiniranjan16@gmail.com> <keerthi@kike.co.in>
Kiran Niranjan <kiranleo1992@gmail.com> <kiran@kike.co.in>
```


## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details

## Acknowledgments

* Inspiration
* etc

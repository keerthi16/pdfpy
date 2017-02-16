# HTML to PDF

Convert HTML to PDF simple and fast

```
sudo npm install pdfpy
```

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you have to get a development env running

## install latest node and npm
```
https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions
```

### Example

```
var pdfpy = require('pdfpy');

var input = "./input.html";
var output = "./out.html";

pdfpy(input, output, function(err, res) {
    if(err) throw err

    console.log("successful");
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

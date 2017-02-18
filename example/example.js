/**
 * Created by keerthiniranjan on 18/02/17.
 */
var pdfpy = require('pdfpy');

var data = {
    //the key as to be same as below
    input: "./test.html",
    output: "./output.pdf"
};

pdfpy.file(data, function (err, res) {
    if (err) throw err

    if (res) console.log("success")
});
/**
 * Created by keerthiniranjan on 18/02/17.
 */

var pdf = require('../pdfpy');
var fs = require('fs');

const should = require("should");

describe("Agent Test", function () {

    it("From url it should create a pdf file", function (done) {

        var data = {
            input: "google.com",
            output: "./out.pdf"
        };

        pdf.url(data, function (err, res) {
            should.not.exist(err);
            should.exist(fs.existsSync(data.output));
            should.exist(res);
        });
        done();
    });

    it("From html file it should create a pdf file", function (done) {

        var data = {
            input: "./example/example.html",
            output: "./example.pdf"
        };

        pdf.file(data, function (err, res) {
            should.not.exist(err);
            should.exist(fs.existsSync(data.output));
            console.log(fs.existsSync(data.output));
            should.exist(res);
        });
        done();
    });
});
/**
 * Created by keerthiniranjan on 18/02/17.
 */

var pdf = require('../pdfpy');
var fs = require('fs');

const should = require("should");

describe("PDF Python", function () {

    it("From url it should create a pdf file", function (done) {

        this.timeout(5000);
        var data = {
            input: "google.com",
            output: "./out.pdf"
        };

        pdf.url(data, function (err, res) {
            should.not.exist(err);
            should.exist(fs.existsSync(data.output));
            should.exist(res);
            fs.unlinkSync(data.output);
            done();
        });
    });

    it("From html file it should create a pdf file", function (done) {

        this.timeout(5000);
        var data = {
            input: "./example/example.html",
            output: "./example.pdf"
        };

        pdf.file(data, function (err, res) {
            should.not.exist(err);
            should.exist(fs.existsSync(data.output));
            console.log(fs.existsSync(data.output));
            should.exist(res);
            fs.unlinkSync(data.output);
            done();
        });
    });

    it("Incorrect path", function (done) {

        this.timeout(5000);
        var data = {
            input: "../example/example.html",
            output: "./example.pdf"
        };

        pdf.file(data, function (err, res) {
            should.exist(err);
            should.exist(!fs.existsSync(data.output));
            should.not.exist(res);
            done();
        });
    });

    it("In put path not provided", function (done) {

        this.timeout(5000);
        var data = {
            output: "./example.pdf"
        };

        pdf.file(data, function (err, res) {
            should.exist(err);
            should.exist(!fs.existsSync(data.output));
            should.not.exist(res);
            done();
        });
    });

    it("Options", function (done) {

        this.timeout(5000);
        var data = {
            input: "./example/example.html",
            output: "./example.pdf",
            options: {
                'page-size': 'A4'
            }
        };

        pdf.file(data, function (err, res) {
            should.not.exist(err);
            should.exist(res);
            should.exist(fs.existsSync(data.output));
            fs.unlinkSync(data.output);
            done();
        });
    });

    it("Options Error", function (done) {

        this.timeout(5000);
        var data = {
            input: "./example/example.html",
            output: "./example.pdf",
            options: {
                'pagesize': 'A4'
            }
        };

        pdf.file(data, function (err, res) {
            should.exist(err);
            should.not.exist(res);
            should.exist(!fs.existsSync(data.output));
            done();
        });
    });
});
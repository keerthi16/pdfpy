/**
 * Created by keerthiniranjan on 14/02/17.
 */

'use strict';
var fs = require('fs');

module.exports = {

    file: function (d, callback) {

        var options;
        options = d.options != undefined ? JSON.stringify(d.options) : false;

        if (d.input == undefined || d.input == "") {
            return callback(new Error("Please provide input path"), null);
        }

        if (!fs.existsSync(d.input)) {
            return callback(new Error("Cannot find the input file at " + d.input), null);
        }

        if (d.output == undefined || d.output == "") {
            return callback(new Error("Please provide output path"), null);
        }

        var child = require('child_process').execFile(
            'python',
            [__dirname + "/python-script.py", d.input, d.output, "true", options]
        );

        var output = "";

        child.stdout.on('data', function (data) {
            output += data;
        });

        child.stderr.on('data', function (err) {
            child.kill()
            return callback(err, false);
        });

        child.on('close', function (code) {
            if (code !== 0) {
                child.kill()
                return callback(code, null);
            }
            console.log("child process exited with code " + code);
        });
    },

    url: function (d, callback) {

        var options;
        options = d.options != undefined ? JSON.stringify(d.options) : false;


        if (d.input == undefined || d.input == "") {
            return callback(new Error("Please provide input path"), null);
        }

        if (d.output == undefined || d.output == "") {
            return callback(new Error("Please provide output path"), null);
        }

        var child = require('child_process').execFile(
            'python',
            [__dirname + "/python-script.py", d.input, d.output, "false", options]
        );

        var output = "";

        child.stdout.on('data', function (data) {
            output += data;
            console.log(data)
        });

        child.stderr.on('data', function (err) {
            child.kill()
            return callback(err, null);
        });

        child.on('close', function (code) {
            if (code !== 0) {
                child.kill()
                return callback(code, null);
            }
            console.log("child process exited with code " + code);
        });
    }
};
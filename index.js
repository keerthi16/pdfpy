/**
 * Created by keerthiniranjan on 14/02/17.
 */

'use strict';

module.exports = function (d, callback) {

    var python = require('child_process').execFile(
        'python',
        [__dirname + "/python-script.py", d]
    );

    var output = "";

    python.stdout.on('data', function (data) {
        console.log(data);
        output += data
    });

    python.stderr.on('data', function (err) {
        return callback(err);
    });

    python.on('close', function (code, signal) {
        console.log(signal);
        if (code !== 0) {
            return callback(null, code);
        }
        return callback(null, code);
    });
};
/**
 * Created by keerthiniranjan on 14/02/17.
 */

'use strict';
var fs=require("fs"),child=require("child_process").spawn;module.exports={file:function(n,t){var o;if(o=void 0!=n.options?JSON.stringify(n.options):!1,void 0==n.input||""==n.input)return t(new Error("Please provide input path"),null);if(!fs.existsSync(n.input))return t(new Error("Cannot find the input file at "+n.input),null);if(void 0==n.output||""==n.output)return t(new Error("Please provide output path"),null);var r=child("python",[__dirname+"/python-script.py",n.input,n.output,"true",o]),i="";r.stdout.on("data",function(n){i+=n}),r.stderr.on("data",function(n){return r.kill(),t(n,null)}),r.on("close",function(n){return 0!==n?(r.kill(),t(n,null)):(console.log("child process exited with code "+n),0==n?-1!=i.indexOf("wkhtmltopdf exited with non-zero code 1")?t(i,null):t(null,i):t(new Error("error in code")+n))})},url:function(n,t){var o;if(o=void 0!=n.options?JSON.stringify(n.options):!1,void 0==n.input||""==n.input)return t(new Error("Please provide input path"),null);if(void 0==n.output||""==n.output)return t(new Error("Please provide output path"),null);var r=child("python",[__dirname+"/python-script.py",n.input,n.output,"false",o]),i="";r.stdout.on("data",function(n){i+=n}),r.stderr.on("data",function(n){return r.kill(),t(n,null)}),r.on("close",function(n){return 0!==n?(r.kill(),t(n,null)):(console.log("child process exited with code "+n),0==n?-1!=i.indexOf("wkhtmltopdf exited with non-zero code 1")?t(i,null):t(null,i):t(new Error("error in code")+n))})}};
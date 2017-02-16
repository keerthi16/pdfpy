/**
 * Created by keerthiniranjan on 14/02/17.
 */

"use strict";var fs=require("fs");module.exports=function(r,n,e){if(void 0==r||""==r)return e(new Error("Please provide input path"),null);if(!fs.existsSync(r))return e(new Error("Cannot find the input file at "+r),null);if(void 0==n||""==n)return e(new Error("Please provide output path"),null);var t=require("child_process").execFile("python",[__dirname+"/python-script.py",r,n]),i="";t.stdout.on("data",function(r){i+=r}),t.stderr.on("data",function(r){return t.kill(),e(r)}),t.on("close",function(r){return 0!==r?(t.kill(),e(r,null)):e(null,i)})};
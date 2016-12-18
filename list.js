#!/usr/bin/env node
const folder = './videos/';
const fs = require('fs');
var names = [];
fs.readdir(folder, (err, files) => {
  files.forEach( file => {
       var name = file.split(".");
       names.push(name[0]);
       console.log("Name: " + name[0]);
    });
console.log("Names: " + names);
})

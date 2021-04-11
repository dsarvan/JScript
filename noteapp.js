#!/usr/bin/env node
// File: noteapp.js
// Name: D.Saravanan
// Date: 08/04/2021
// Script to demonstrate variable access from other files

//const name = 'raman';
//console.log(name);

const name = require('./utils.js')
console.log(name)

//const add = require('./utils.js')
//const sum = add(4, -2);
//console.log(sum)

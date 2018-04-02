#!/usr/bin/env node
var clap = require('./')
process.stdin.pipe(clap()).pipe(process.stdout)

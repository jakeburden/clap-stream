var through = require('through2')

module.exports = function () {
  return through(write)
}

function write (buf, enc, next) {
  next(null, replace(buf.toString()))
}

function replace (str) {
  return str
    .replace(/\s\s+/g, ' ')
    .replace(/\s/g, ' ' + String.fromCodePoint(0x1F44F) + ' ')
}

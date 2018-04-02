var clap = require('./')
var test = require('tape')
var concat = require('concat-stream')

test('basic', function (t) {
  t.plan(1)
  var stream = clap()
  stream.pipe(concat(function (buf) {
    var actual = buf.toString()
    var expected = 'wow 👏 cool 👏 nice'
    t.equal(actual, expected)
  }))
  stream.end('wow cool nice')
})

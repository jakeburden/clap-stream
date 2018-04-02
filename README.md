# clap-stream

> streams 👏 text 👏 to 👏 claps


## Usage

```js
var clap = require('clap-stream')
var stream = clap()
stream.pipe(process.stdout)
stream.end('streams text to claps')
// yields 'streams 👏 text 👏 to 👏 claps'
```

> if installed globally (-g) 

```bash
cat agile_manifesto.txt | clap-stream
```

> or use npx

```bash
cat agile_manifesto.txt | npx clap-stream
```

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install clap-stream
```

## License

MIT


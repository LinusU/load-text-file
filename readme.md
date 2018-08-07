# load-text-file

[Strips UTF-8 BOM](https://github.com/sindresorhus/strip-bom), uses [`graceful-fs`](https://github.com/isaacs/node-graceful-fs), and returns Promises.

## Install

```sh
npm install --save load-text-file
```

## Usage

```js
const loadTextFile = require('load-text-file')

loadTextFile('foo.txt').then((text) => {
  console.log(text)
  //=> Hello, World!
})
```

## API

### loadTextFile(filePath)

Returns a promise for the text content.

### loadTextFile.sync(filepath)

Returns the text content.

## Related

- [load-json-file](https://github.com/sindresorhus/load-json-file) - Read and parse a JSON file

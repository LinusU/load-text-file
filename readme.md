# load-text-file

[Strips UTF-8 BOM](https://github.com/sindresorhus/strip-bom), uses [`graceful-fs`](https://github.com/isaacs/node-graceful-fs), and returns Promises.

## Install

```sh
npm install --save load-text-file
```

## Usage

```js
import { loadTextFile } from 'load-text-file'

const text = await loadTextFile('foo.txt')
console.log(text)
//=> Hello, World!
```

### Sync

```js
import { loadTextFileSync } from 'load-text-file'

const text = loadTextFileSync('foo.txt')
console.log(text)
//=> Hello, World!
```

## API

### `loadTextFile(path)`

- `path` (`string | Buffer | URL`, required)
- returns `Promise<string>` - a promise for the text content

### `loadTextFileSync(path)`

- `path` (`string | Buffer | URL`, required)
- returns `string` - the text content

## Related

- [load-json-file](https://github.com/sindresorhus/load-json-file) - Read and parse a JSON file

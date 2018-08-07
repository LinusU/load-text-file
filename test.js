const assert = require('assert')
const loadTextFile = require('./')
const fs = require('fs')

assert.strictEqual(loadTextFile.sync('index.js'), fs.readFileSync('index.js').toString())

loadTextFile('index.js').then((text) => {
  assert.strictEqual(text, fs.readFileSync('index.js').toString())
}).catch((err) => {
  process.exitCode = 1
  console.error(err.stack)
})

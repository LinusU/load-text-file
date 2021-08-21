import assert from 'node:assert'
import fs from 'node:fs'

import { loadTextFile, loadTextFileSync } from './index.js'

async function main () {
  assert.strictEqual(await loadTextFile('index.js'), fs.readFileSync('index.js').toString())
  assert.strictEqual(loadTextFileSync('index.js'), fs.readFileSync('index.js').toString())
}

main().catch((error) => {
  process.exitCode = 1
  console.error(error.stack)
})

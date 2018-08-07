const fs = require('graceful-fs')
const stripBom = require('strip-bom')
const pify = require('pify')

module.exports = (filePath) => pify(fs.readFile)(filePath, 'utf8').then(stripBom)
module.exports.sync = (filePath) => stripBom(fs.readFileSync(filePath, 'utf8'))

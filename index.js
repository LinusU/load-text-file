import fs from 'graceful-fs'
import stripBom from 'strip-bom'

export async function loadTextFile (path) {
  return stripBom(await fs.promises.readFile(path, 'utf8'))
}

export function loadTextFileSync (path) {
  return stripBom(fs.readFileSync(path, 'utf8'))
}

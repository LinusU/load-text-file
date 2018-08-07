interface LoadTextFile {
  /**
   * Returns a promise for the text content.
   */
  (filePath: string): Promise<string>

  /**
   * Returns the text content.
   */
  sync (filePath: string): string
}

declare const loadTextFile: LoadTextFile
export = loadTextFile

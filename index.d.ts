/** @returns a promise for the text content */
export function loadTextFile(path: string | Buffer | URL): Promise<string>

/** @returns the text content */
export function loadTextFileSync(path: string | Buffer | URL): string

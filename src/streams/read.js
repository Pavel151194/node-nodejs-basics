import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createReadStream } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = "files";
const sourceFile = "fileToRead.txt";

const readStream = createReadStream(resolve(__dirname, sourceDir, sourceFile));

const read = async () => {
  try {
    readStream.pipe(process.stdout);
  } catch (error) {
    console.error(error);
  }
};

await read();

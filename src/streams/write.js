import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createWriteStream } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = "files";
const sourceFile = "fileToWrite.txt";

const writeStream = createWriteStream(resolve(__dirname, sourceDir, sourceFile));

const write = async () => {
  try {
    process.stdin.pipe(writeStream);
  } catch (error) {
    console.error(error);
  }
};

await write();

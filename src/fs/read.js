import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readFile } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = "files";
const sourceFile = "fileToRead.txt";
const errorMessage = "FS operation failed";

const read = async () => {
  try {
    const content = await readFile(resolve(__dirname, sourceDir, sourceFile), {
      encoding: "utf8",
    });
    console.log(content);
  } catch (error) {
    console.error(error);
    throw new Error(errorMessage);
  }
};

await read();

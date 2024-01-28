import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { rm } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = "files";
const sourceFile = "fileToRemove.txt";
const errorMessage = "FS operation failed";

const remove = async () => {
  try {
    await rm(resolve(__dirname, sourceDir, sourceFile));
  } catch (error) {
    console.error(error);
    throw new Error(errorMessage);
  }
};

await remove();

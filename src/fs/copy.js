import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { cp } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = "files";
const destinationDir = "files_copy";
const errorMessage = "FS operation failed";

const copy = async () => {
  try {
    await cp(resolve(__dirname, sourceDir), resolve(__dirname, destinationDir), {
      errorOnExist: true,
      force: false,
      recursive: true,
    });
  } catch (error) {
    console.error(error);
    throw new Error(errorMessage);
  }
};

await copy();

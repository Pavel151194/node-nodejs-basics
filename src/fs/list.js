import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readdir } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = "files";
const errorMessage = "FS operation failed";

const list = async () => {
  try {
    const files = await readdir(resolve(__dirname, sourceDir), { recursive: true });
    console.log(files);
  } catch (error) {
    console.error(error);
    throw new Error(errorMessage);
  }
};

await list();

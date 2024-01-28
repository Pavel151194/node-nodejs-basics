import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { readdir, rename as renameFile } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = "files";
const wrongFileName = "wrongFilename.txt";
const properFileName = "properFilename.md";
const errorMessage = "FS operation failed";

const rename = async () => {
  try {
    const files = await readdir(resolve(__dirname, sourceDir), { recursive: true });

    if (files.includes(properFileName)) throw new Error(errorMessage);

    await renameFile(resolve(__dirname, sourceDir, wrongFileName), resolve(__dirname, sourceDir, properFileName));
  } catch (error) {
    console.error(error);
    throw new Error(errorMessage);
  }
};

await rename();

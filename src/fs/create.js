import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { writeFile } from "node:fs/promises";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = "files";
const sourceFile = "fresh.txt";
const content = "I am fresh and young";
const errorMessage = "FS operation failed";

const create = async () => {
  try {
    await writeFile(resolve(__dirname, sourceDir, sourceFile), content, { flag: "wx" });
  } catch (error) {
    console.error(error);
    throw new Error(errorMessage);
  }
};

await create();

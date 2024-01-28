import { createHash } from "node:crypto";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createReadStream } from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = "files";
const sourceFile = "fileToCalculateHashFor.txt";

const readStream = createReadStream(resolve(__dirname, sourceDir, sourceFile));
const hashStream = createHash("sha256").setEncoding("hex");

const calculateHash = async () => {
  try {
    readStream.pipe(hashStream).on("data", (hash) => {
      console.log(hash);
    });
  } catch (error) {
    console.error(error);
  }
};

await calculateHash();

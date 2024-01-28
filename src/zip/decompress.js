import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = "files";
const sourceFile = "archive.gz";
const destinationFile = "fileToCompress.txt";

const unzip = createGunzip();
const readStream = createReadStream(resolve(__dirname, sourceDir, sourceFile));
const writeStream = createWriteStream(resolve(__dirname, sourceDir, destinationFile));

const decompress = async () => {
  pipeline(readStream, unzip, writeStream, (error) => {
    if (error) {
      console.error(error);
    }
  });
};

await decompress();

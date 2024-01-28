import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = "files";
const sourceFile = "fileToCompress.txt";
const destinationFile = "archive.gz";

const gzip = createGzip();
const readStream = createReadStream(resolve(__dirname, sourceDir, sourceFile));
const writeStream = createWriteStream(resolve(__dirname, sourceDir, destinationFile));

const compress = async () => {
  pipeline(readStream, gzip, writeStream, (error) => {
    if (error) {
      console.error(error);
    }
  });
};

await compress();

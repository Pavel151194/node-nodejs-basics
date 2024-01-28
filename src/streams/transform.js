import { Transform } from "node:stream";

const reverse = (chunk, _, callback) => {
  try {
    const reversedString = chunk.toString("utf8").split("").reverse().join("");
    callback(undefined, reversedString);
  } catch (err) {
    callback(err);
  }
};

const transform = async () => {
  try {
    process.stdin.pipe(new Transform({ transform: reverse })).pipe(process.stdout);
  } catch (error) {
    console.log(error);
  }
};

await transform();

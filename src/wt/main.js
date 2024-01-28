import { dirname, resolve as resolvePath } from "node:path";
import { fileURLToPath } from "node:url";
import { availableParallelism } from "node:os";
import { Worker } from "node:worker_threads";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceFile = "worker.js";
const startNumber = 10;

const runWorker = (workerData) =>
  new Promise((resolve) => {
    const worker = new Worker(resolvePath(__dirname, sourceFile), { workerData });

    worker.on("message", (data) => resolve({ status: "resolved", data }));
    worker.on("error", () => resolve({ status: "error", data: null }));
  });

const performCalculations = async () => {
  const workers = Array.from({ length: availableParallelism() }, (_, i) => runWorker(startNumber + i));
  const calculationsResult = await Promise.all(workers);
  console.log(calculationsResult);
};

await performCalculations();

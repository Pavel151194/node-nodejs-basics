import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { fork } from "node:child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const sourceDir = "files";
const sourceFile = "script.js";

const spawnChildProcess = async (args) => {
  fork(resolve(__dirname, sourceDir, sourceFile), args, { stdio: "inherit" });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["arg0", "arg1", "arg2", "arg3", "arg4", "arg5"]);

import {spawn} from 'child process';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path';
import {initializeMessage, initalizedMessage, listToolsMessage} from "./utils.js/helpers.js";
import { isJsonRpcMessage, getRpcMessage, isInitializationMessage } from "./utils.js/helpers.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let serverPath = join(__dirname, 'server.js');
console.log("Debug client starting at server path: ", serverPath);

const child = spawn('node', [serverPath]);

let serverPath = join(__dirname, 'server.js');
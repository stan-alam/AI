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
console.log("DEBUG client starting server at: ", serverPath);

const child = spawn('node', [serverPath]);

let initialized = false;
//listen for data from the child 

function handleRpcMessage(data) {
    console.log("handleRpcMessage");

    let message = getRpcMessage(data.toString().trim());
    if (!message) {
        console.error("Invalid JSON-RPC message: ", data.toString());
        return;
    }
    console.log("message.result: ", message.result);
}

function listTools(){
    console.log("DEBUG client asks for tools list");
        child.stdin.write(JSON.stringify(listToolsMessage()) + '\n');
}

async function connect(): Promise<void> {
    //send data to the server
console.log("Debug client sending data to a server");
child.stdin.write(JSON.stringify(initializeMessage()) + '\n');

//construct a promise that resolves when the server sends an initialization message
return new Promise((resolve, reject) => {
    child.stdout.on('data', (data) => { 
        const message = data.toString().trim();
        if (isJsonRpcMessage(message)) {
            const json = JSON.parse(message);
            if (isInitializationMessage(json)) {
                console.log("Debug client received init response: ", json);
                child.stdout.write(JSON.stringify(initalizedMessage()) + '\n');
                initialized = true;
                setupListeners();
                resolve();
            } else {
                reject(new Error("Expected initialization message, got: " + message));
            }
        } else {
            console.error("Received non-JSON message from server: ", message);
        } 
    });
});
}
function setupListeners() {
    child.stdout.resume();
    console.log("debug client, setting up listeners for child processes...");
    child.stdout.on('data', (data)=> {
        if(isJsonRpcMessage(data.toString().trim())){
        } else {
            console.log(`Client::ondata> (FROM SERVER): unregconized message: ${data.toString().trim()}`);

    });
    child.stderr.on('data', (data) => {
        console.error(`Client::onerror> (FROM SERVER): ${data.toString()}`);
    });
    child.on('exit', (code) => {    
        console.log(`Client::onexit> Server process exited with code ${code}`);
    });
}
async function main(){
    await connect();
    //after connection, start sending messages
    listTools();
}

main().catch((err) => {
    console.error("Error in main: ", err);
    process.exit(1);
});

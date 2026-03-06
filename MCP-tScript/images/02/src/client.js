//client

import { spawn } from child_process;

const child = spawn('node', ['server.js']);

//now listen for the data from the child
child.stdout.on('data', (data) => {
    console.log(`Client::ondata> (FROM SERVER): ${data}`);
});

//send data to the server
console.log("Client sending data to server...");
child.stdin.write("data 1 from client\n");
child.stdin.write("exit\n");

//error handling
child.stderr.on('data', (data) => {
    console.error(`Client::onerror > (FROM SERVER): ${data}`);
});
//handle child process exit
child.on('exit', (code) => {
    console.log(`Client::onexit> (From Server): Server stopped with exit code ${code}`);
});

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/01/Mcp-tScript01%20-%20page%201.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/01/Mcp-tScript01%20-%20page%202.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/01/Mcp-tScript01%20-%20page%203.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/01/Mcp-tScript01%20-%20page%204.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/01/Mcp-tScript01%20-%20page%205.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%201.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%202.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%203.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%204.png" width="80%" height="80%">
</a>

```typescript
//server.js

import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    if (line.includes('exit')) {
        console.log('Exiting server...server shutdowing down');
        process.exit(0);
    
    } else {
        console.log("line received: (server data):", line);
    }
});
```
```TypeScript
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
```
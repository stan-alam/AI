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
<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%205.png" width="80%" height="80%">
</a>

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
<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%206.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%207.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%208.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%209.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%2010.png" width="80%" height="80%">
</a>

```json
//14.A
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "initialize",
    "params": {
        "protocolVersion": "2026-03-06",
        "capabilities": {
            "roots": {
                "listChanged": true
            },
            "sampling" : {}
        },
        "clientInfo": {
            "name": "client",
            "version": "42"
        }
    }
}
```

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%2011.png" width="80%" height="80%">
</a>

```json
//15A-B
{
    "jsonrpc":2.0,
    "id":1,
    "result" : {
        "protocolVersion": "2026-03-06",
        "capabilities": {
        "logging": {"log":"captainsLog"},
        "prompts":{"listChanged": true}},
        "resources": {
            "subscribe": true,
            "listChanged":true
        },
    "tools": {
        "listChanged":true
    },   
    "serverInfo": {
        "name" : "stanServer",
        "version" : "5000"
    }
  }
}
```


<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%2012.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%2013.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%2014.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%2015.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%2016.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%2017.png" width="80%" height="80%">
</a>

```typescript
import {spawn} from 'child process';
import {fileURLToPath} from 'url';
import {dirname, join} from 'path'; 
//... code stub
```
<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%2018.png" width="80%" height="80%">
</a>

<a>
  <img src="https://github.com/stan-alam/AI/blob/develop/MCP-tScript/images/02/Mcp-tScript02%20-%20page%2019.png" width="80%" height="80%">
</a>
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
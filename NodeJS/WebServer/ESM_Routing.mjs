// Add "type": "module" in package.json to enable ESM imports
import { createServer } from "node:http"; // Create server
import { createReadStream } from "node:fs"; // File system
import { pipeline } from "node:stream/promises"; // Streaming
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = createServer(async (req, res) => { // Fix parameter name

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        await pipeline(
            createReadStream(__dirname + '/index.html'),
            res
        );
    }
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let obj = {
            firstName: 'Asef',
            lastName: 'Khan' 
        };
        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(400);
        res.end();
    }

});

server.listen(1337, '127.0.0.1');

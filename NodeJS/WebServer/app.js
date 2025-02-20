// Grab the HTTP core module in Node.js to create a server.
const http = require('http');

// Import the fs module to handle file system operations.
const fs = require('fs');

/* 
  createServer sets up an HTTP server that listens for incoming requests. 
  - When a request arrives, Node.js handles it using an event-driven approach.
  - The request object (`req`) comes from Node's event system, sometimes involving the OS.
  - The response object (`res`) is initially empty, except for headers that we define.
*/
http.createServer(function (req, res) {
    
    // Write the response headers: Status 200 (OK) and specify content type as HTML.
    res.writeHead(200, { 'content-type': 'text/html' });

    /* 
      Read the HTML file using `fs.createReadStream()`, which:
      - Creates a readable stream to read `index.html` in chunks.
      - Streams the file content as raw binary data without loading the entire file into memory.
      - Efficient for large files because it reads and sends data progressively.

      `.pipe(res)`:
      - Pipes the readable stream (`fs.createReadStream`) to the writable stream (`res`).
      - Automatically writes chunks of data from the HTML file into the response.
      - `res` acts as a writable stream where the HTML file content is directly sent to the client.
      - The response body is dynamically written, and `res.end()` is automatically called when the stream finishes.
    */
    fs.createReadStream(__dirname + '/index.html').pipe(res);

    /* 
      At this point:
      - `res.headers` contains the headers we set earlier.
      - `res.body` doesn’t exist explicitly in Node.js but is being streamed in real-time.
      - The browser receives and progressively renders the HTML content as chunks arrive.
    */

}).listen(1337, '127.0.0.1'); // The server listens on port 1337, accepting requests from localhost (127.0.0.1).


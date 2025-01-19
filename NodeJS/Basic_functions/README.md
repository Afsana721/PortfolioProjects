NODE JS ************************

Why Use Node.js Instead of Just a JavaScript Engine?
#############################
JavaScript Engine (like V8):
Runs JavaScript code (e.g., in browsers).
Limited to client-side operations (manipulating DOM, UI).

Node.js: *****************
Built on the V8 engine to run JavaScript outside the browser.
Provides extra features like:
File system access.
Building servers.
Networking and APIs.
Enables full-stack development (front-end + back-end).

****************************
Working with the Computer Operating System: Browser vs. Node.js
Browser: #####################

Browsers cannot directly interact with the OS due to strict security sandboxing.
They allow limited access to system resources (like files) only with user permission.
Example:
To access files, the user must upload them explicitly via a file picker.
Web Extensions or Specialized Browsers:
Some browsers/extensions allow extended functionality (e.g., WebUSB or File API).
Still, these actions are constrained and require explicit user consent.
Node.js:

Node.js is designed for direct interaction with the operating system.
It operates outside the browser, with no sandbox restrictions, enabling:
File system operations (read/write/delete).
Network operations (server setup, API calls).
Process management (start/stop OS processes).
Why npm init?
Running npm init sets up a project but does not explicitly give permissions to the OS.
Node.js already has the required permissions because it runs as a system-level program (installed separately on the OS).


Key Difference: *****************
Browsers: Limited OS interaction, always user-controlled.
Node.js: Full, direct access to the OS, used for building server-side or system-level applications. It doesn't require extra permissions beyond installation.

How Node.js Interacts with the OS
Networking (TCP):

Node.js has built-in modules like net and http that allow it to create and manage TCP connections.
It can:
Open a TCP socket for communication (e.g., a server listening on a specific port).
Exchange data packets reliably between devices.
Example Use: Running a web server or connecting to a database over a network.
File System (FS):

Node.js interacts with the OS's file system via the fs module.
It can read, write, delete, or modify files directly on the disk.
Processes:

Node.js can manage OS-level processes using the child_process module.
Example: Running system commands or spawning new processes.
Operating System Information:

Using the os module, Node.js retrieves OS details like CPU, memory, and uptime.
Role of TCP
TCP ensures reliable communication between Node.js applications and external systems (e.g., clients, APIs, or databases).
Node.js uses TCP for:
Creating servers (e.g., HTTP or WebSocket servers).
Connecting to databases like MongoDB, MySQL, or Postgres.
Summary
Node.js uses built-in modules and protocols like TCP to communicate with the OS and other systems, enabling it to handle tasks like file operations, networking, and process management effectively.


*******************
What Happens When Uses npm init -y?
Creates package.json:

It initializes our project as a Node.js project.
The package.json file stores:
Project name, version, description, entry point, and dependencies.
Tracks packages installed via npm.
Prepares our Project:

Identifies it as a Node.js app.
Enables us to install and manage npm modules.

#################
The package.json file tracks:

Project Information:

Name, version, description, and entry point of our project.
Dependencies:

Lists npm modules installed for our project (e.g., axios, express).
Scripts:

Custom commands to run tasks (e.g., start, test).
Metadata:

Author, license, and other optional details.
It helps manage and reproduce our project environment.

####################

Basic_functions Project : -----------

Structure - 
1. images
    a.Asef.jpeg
    b.Masud.png
2. app.js
3. client.js
3. data.json
4. index.html 

************************
So I need to use app.js and work with node.js file module that is a code module in Nodejs. 
Steps:
Node.js Setup:Project Basic_funcitons

1. Import the Required Modules: getting required objects 

const fs = require('fs'); - making prototype chain with my JS flie to get fs objects properties. 
const http = require('http'); same to get, why because I need to create http request and getting 
response, so sending request by proper way and getting response and use this in my js file, I heed
this object (http module). 
fs: File system module to read/write files.
http: HTTP module to create a server.

2. Create the Server: I need to create a variable that is an objet and has ability to handle with 
  some funcitonality that I create inside it to make http calls using req object and taking res 
object with proper format - req object can send http request using my requirement but is has a 
format which call url - path where data or file, what types of data I need from the file and if the 
file not in the location then tell me what is the error, so to getting error inside the system 
I need to use error object which store the error of the system and I can send some of the text that
has meaning to read and update my work. 
  So createServer() method takes two object and to work with these object, has a callback function, that its 
ability. Basically this callback does real work. I can define what should be the request that made by me then the 
request object takes my requirement and make a format that called request url or request endpoint- that means where the 
request should ended. Means there is a file and I am asking some of the data from the file, so these speficic file daata 
would be the ending point for my request object. When it can provided then its work should be done also I have to give it 
some of the information, like what type of request, that means if get then it will work for the deisplay data that also 
pass by the request object and what type of data is sending to it, then its define or notifiy that I am carrying some of 
Json data, light weight which is simillar js object data but there is both key and value are wrapped by double quetation. 
but header also takes what types of parsing its asing as in this request- how to read this data - utf-8 (unicode transform 
format where each character convert 8 bit - 0 and 1 ). 

const server = http.createServer((req, res) => {

http.createServer():
Creates a new HTTP server.
Takes a callback function with two objects:
req (Request): Contains details of the incoming request (e.g., URL, method, headers).
Then comes to the request 
res (Response): Used to send a response to the client (e.g., HTML, JSON).


3. Handle the Root Route (/)
Now we have a request object (req) with the URL property (req.url) to identify what the client (browser) is requesting. If the request URL matches /, it means the browser is asking for the main HTML file.
javascript
Copy
Edit
if (req.url === '/') {
  fs.readFile('./index.html', 'utf-8', (err, data) => {
What Happens Here:
req.url checks the URL of the incoming request.
If the request is /, it triggers the file system (fs) to read the index.html file.
fs.readFile() reads the file's content:
err: Captures errors (e.g., file not found).
data: Contains the HTML file content if reading is successful.
4. Handle Errors for the HTML File
javascript
Copy
Edit
if (err) {
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('Error loading index.html');
}
What Happens Here:
If there's an error (err), we respond with:
A 500 status code (server error).
Plain text explaining that the HTML file couldn't be loaded.
res.writeHead() defines the response status and headers.
5. Serve the HTML File
javascript
Copy
Edit
else {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(data);
}
What Happens Here:
If no error occurs, we send:
A 200 status code (OK).
The content type as text/html.
The actual HTML file content (data) to the browser using res.end(data).
6. Handle the /client.js Route
javascript
Copy
Edit
} else if (req.url === '/client.js') {
  fs.readFile('./client.js', 'utf-8', (err, data) => {
What Happens Here:
If the request is for /client.js, the server reads the client-side JavaScript file.
The same process as the HTML route:
Handle errors (file missing).
Respond with the file content if available.
7. Serve JSON Data
javascript
Copy
Edit
} else if (req.url === '/data') {
  fs.readFile('./data.json', 'utf-8', (err, data) => {
Why JSON?

JSON data is light and structured, ideal for transferring data between the server and browser.
This route serves dynamic data, which the browser can fetch and process.
What Happens Here:

fs.readFile() reads the data.json file.
Sends the file's content with:
A 200 status code.
The Content-Type as application/json.
8. Handle Images Dynamically
javascript
Copy
Edit
} else if (req.url.startsWith('/images/')) {
  fs.readFile(`.${req.url}`, (err, data) => {
Why Images Dynamically?

To serve images based on their requested paths without manually writing routes for each.
What Happens Here:

req.url gives the specific image path requested (e.g., /images/Asef.jpeg).
The server reads and sends the image file.
9. Default 404 for Unknown Routes
javascript
Copy
Edit
} else {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Route not found');
}
What Happens Here:
If no route matches the request URL, the server responds with:
A 404 status code (not found).
A plain text message saying the route wasn't found.
10. Start the Server
javascript
Copy
Edit
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
What Happens Here:
Binds the server to port 3000.
Starts listening for incoming requests on http://localhost:3000/.
Logs a message when the server is running.
Why Add client.js for DOM Management?
Separation of Concerns:

The server (Node.js) focuses on serving files and data.
The client-side JavaScript (client.js) handles dynamic DOM updates.
Client-Side Processing:

client.js dynamically fetches JSON data from /data using fetch() and updates the HTML structure.
This reduces server-side work by offloading DOM manipulation to the browser.
Dynamic Content Rendering:

Instead of hardcoding all HTML in index.html, client.js makes the page dynamic:
Fetches JSON data.
Creates HTML elements on the fly (e.g., <article> for each person).
Updates the DOM with fetched data.
This step-by-step process explains why we use imperative code in Node.js (manual routing, file handling) and separate client-side logic for DOM management. Let me know what you'd like clarified further!
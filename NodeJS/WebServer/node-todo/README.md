# Setting Up a Server with Express.js

## Importing Express
We first import Express and store the function reference in a variable:
```js
const express = require("express");

*** Creating an Express Instance
Calling the express() function creates an instance (app) with its own execution context.

const app = express();
The app object holds all of Express's properties and methods along with its own prototype.

### How Express Handles Requests
Express can handle requests from various sources, including:

Browser: Users accessing web pages.
OS (Operating System): Accessing files, databases, and system resources.
Node.js: Internal requests within an application.
When a request is made:

Express accesses the HTTP request object.
It reads the request data, processes it, and sends a response.
It may interact with the OS (e.g., read/write files, query databases).
It structures and returns a response (JSON, HTML, text, etc.).
The response is sent back to the client (browser, API, or user agent).
Why Use Express?
Express simplifies server creation by:

Managing routing (GET, POST, PUT, DELETE).
Handling middleware efficiently.
Streamlining request-response processing.
Allowing easy integration with databases and third-party services.
Express.js serves as a bridge between the client (browser or app) and the OS, making server-side development efficient and structured.


****** 
app.use(); -  in Express is used to handle middleware, including serving static files.

For Static Files:

express.static() serves static files like CSS, images, or JavaScript.
It maps a URL path to a folder on the server.
Files are attached to the Express app, allowing them to be served in HTTP responses.
For Middleware Execution:

It runs before handling routes.
Can modify request/response objects or execute additional logic.

Route or URL path (optional) → Defines where the middleware should apply.
Middleware function → Defines what to do when a request matches the route. 

app.use('/assets', express.static(__dirname + '/public'));

//for exploser or content display to the browser dynamically need a view engine. 

app.set('view engine', 'ejs');
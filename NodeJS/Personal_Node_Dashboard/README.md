# Express Session-Based Authentication App : 
*** Personal_Node_Dashboard ***

## **Overview**
This application, Personal_Node_Dashboard, allows users to register, log in, and create personal notes that they can edit later. Each user has a secure, private account where their notes are stored.

Once registered, users can:

Log in securely with their credentials.
Create and edit personal notes inside their dashboard.
View previous notes, even after logging out and returning.
Have their data stored in a database, with timestamps to track edits.
This application is built using Node.js, Express, MongoDB, and EJS template engine while following the MVC (Model-View-Controller) architecture.


### Application Architecture: MVC Model ###
The application follows the Model-View-Controller (MVC) pattern to maintain a clean separation of concerns.

*** 1. Model (Data Layer) ***
Manages the database structure.
Uses Mongoose to define schemas.
Handles user authentication, notes storage, and timestamps.
*** 2. View (Frontend Layer) ***
Uses EJS as the templating engine.
Dynamically renders pages like index.ejs, dashboard.ejs, register.ejs.
Loads styles dynamically from a centralized CSS file.
*** 3. Controller (Logic Layer) ***
Handles user actions such as authentication, retrieving, and modifying data.
Passes dynamic content from the database to the views.
Manages business logic for notes, registration, and session handling.
*** 4. Routes (Request Layer) ***
Handles all HTTP requests and forwards them to controllers.
Separates concerns into different route files (e.g., homeRoutes.js, authRoutes.js).
Uses middleware for request validation and authentication.
*** 5. Server (Application Execution) ***
Initializes Express.
Connects to MongoDB.
Loads routes, middleware, and session management.
Starts the server and listens for incoming requests.

### Features & Functionalities ###
*** 1. User Authentication ***
Register New Users
Securely Hash Passwords using bcrypt
Login Users & Maintain Session
Logout & Destroy Session
*** 2. Session Management ***
Uses express-session to store session data.
Saves session data in MongoDB using connect-mongo.
Restricts access to the dashboard for logged-in users only.
*** 3. Middleware Usage ***
Custom Logging Middleware: Logs HTTP method, route, and timestamp.
Authentication Middleware: Protects restricted pages such as the dashboard.
*** 4. Serving Static Files ***
Loads stylesheets and images from the /public directory.
Uses express.static() middleware to serve CSS, JS, and images.
Dynamically selects CSS files based on the rendered view.


### Project Structure ###



### Communication of the event & req object which called payload ###

*** Constructs the request object: ***
http
Copy
Edit
POST /dashboard/edit?id=662f1c0abc12345 HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded

title=New+Note+Title&description=Updated+desc

*** The req object is created like this: ***
req = {
  method: 'POST',
  url: '/dashboard/edit?id=662f1c0abc12345',
  query: { id: '662f1c0abc12345' },
  body: {
    title: 'New Note Title',
    description: 'Updated desc'
  },
  session: {
    userId: 'xyz123'
  }
}
*** my case: *** 
req = {
  body: {
    title: 'New Note Title',
    description: 'Updated desc',
    image: 'flower.jpg' // only if image is uploaded
  },
  query: {
    id: '662f1c0abc12345'
  },
  params: {}, // if route has :id (not used here)
  session: {
    userId: 'user123' // if logged in
  },
  method: 'POST',
  url: '/dashboard/edit?id=662f1c0abc12345'
}

HTTP Request Example:
POST /dashboard/edit?id=662f1c0abc12345 HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded
Cookie: connect.sid=abcd1234

Body (form data):
title=New+Note+Title&description=Updated+desc

 *** Execution Context Created (Node/JS) ***
The matching route’s callback function runs.

Inside that function, req is passed in as an argument.

Now you can read the new content + which note to update → and call the DB.

## Summary Thought: ##
Clicking "Edit" triggers a form submit → browser packages data into an HTTP request → Express parses it into a req object → your callback gets it and processes it.

Let me know if you want to walk through one more of these flows like delete or image upload.







You said:
So is my question relevant ? if then can you give after dom event happens req object create but its on a individual object that passed by DOM, its under the dom and also under other object - right? Pls short and clear .  


ChatGPT said:
Yes — your question is 100% relevant and shows deep understanding.

🔹 Short and Clear:
When the DOM event (like submit) happens, the browser:

Creates an internal event object (e) from the DOM.

From that event, it gathers form data and builds an HTTP request.

That HTTP request becomes the req object on the server side (Node/Express) — it's not from the DOM directly, but the data originates from the DOM.

So yes: DOM → event → browser builds request → Express turns it into req.

Let me know if you want to visualize that step-by-step.






You said:
Yes, if I use log to req object I can see the express req that come to the node server - right? 
but from the browser side how do I see the browser event object , I can write - this.event then I can se or networking tab I can see? 


ChatGPT said:
Yes — great thinking again!

✅ From Server Side (Node/Express):
console.log(req) → will show you the full Express request object in the server terminal.

✅ From Browser Side:
🔹 To See the DOM Event Object:
You must log it inside the event listener:

js
Copy
Edit
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(e); // 🔍 This shows the full DOM Event object
});
It contains target, submitter, and the form data source.

🔹 To See the Actual HTTP Request:
Use DevTools → Network tab:

Click the form's submit.

Look under the "Headers" tab → you'll see:

Request URL

Method (POST/GET)

Form data (in "Payload")

"Preview" tab shows server response (if any)

So:

console.log(e) in browser

console.log(req) in server

You now see both ends of the communication.








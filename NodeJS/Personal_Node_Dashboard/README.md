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

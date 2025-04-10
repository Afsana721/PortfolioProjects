# Express Session-Based Authentication App #
    
 *** Personal_Node_Dashboard *** 
   
  ## What This App Does ##
This is a session-based personal note-taking web application. User can register, log in, and manage their own notes securely. Each note can included a titel, description, and an optional image. User can edit or delete their notes anytime from their dashboardd. All data is stored in MongoDB, and sessions are maintained across login/logout. 

## OverView ##
This application, *** Personal_Node_Dashboard *** is written in JavaScript using Node.js and Express.js. 
It follows the MVC architecture and utililzes Mongodb for data storage. EJS is used to templating, and sessions are handled with express-session. The app is useful for learning session management, RESTful routing, MVC design, and building CRUD features from scratch. 

## Project Requirements ##
*** Node.js (V18 or above recommeded) ***
*** MongoDB (Local or Atlas instance) ***
*** NPM Registry (for installing dependencies ) ***

## Installation ##
1. git clone https://github.com/Afsana721/PortfolioProjects.git
cd PortfolioProjects/NodeJS/Personal_Node_Dashboard
2. Open the project in your preferred code editor (e.g., VS Code).
3.Install all required dependencies - npm install ..
4. Make sure MongoDB is running. 

## Usage OverView ##
1. To run app - npm start or nodemon app.js
2. Then open browser and go to - http://localhost:3000
3.Can now: 
  a. Register a new account
  b. Log in to user dashboard
  c. Create, edit, and delete notes
  d. Attach images to user notes (Stored locally in / public / uploads)

## Technologies Used ##
 *** Node.js – JavaScript runtime to run server-side logic ***

*** Express.js – Web framework from npm registry for handling routing and middleware ***

*** MongoDB – NoSQL database for storing users and notes ***

*** Mongoose – ODM (from npm registry) for modeling MongoDB data in Node.js ***

*** EJS – Templating engine (from npm) to render dynamic HTML/content of web pages ***

*** express-session – npm module for managing login sessions ***

*** Multer – npm module for handling file uploads (note images / binary data) ***

*** Mocha – npm module used as a test framework to structure automated unit tests (only functionality) ***

*** Chai – Assertion library (npm) used for readable and expressive test results ***

*** Supertest – npm module used for HTTP testing of API endpoints and routes (mimics browser requests) ***

### Application Processing Overview ###
The app begins by creating a web server using Express.js. The server listens on PORT 3000 (localhost) and handles incoming HTTP requests from the browser.

1. When a user visits the app in the browser, routes defined in Express are triggered.

2. EJS templates dynamically render the appropriate page (Register, Login, Dashboard).

3. Form data is sent using POST requests, handled by route controllers.

4. Session management is enabled using express-session to track logged-in users securely.

5. Mongoose interacts with MongoDB to store or retrieve user and note data.

6. Uploaded files like images are handled with Multer and stored locally in /public/uploads.

7. All CRUD operations (Create, Read, Update, Delete) are processed through their respective routes and services. 

*** The app follows the MVC architecture, separating: ***

  Model → (MongoDB + Mongoose) #

  View → (EJS templates) #

  Controller → (Route handler callback functions) #

 ### Testing OverView ###
 The application use Mocha, Chai, and Supertest to automate and validate key backend functionalites. 
 
 1. Mocha - Acts as the test runner that executes all defined test cases inside describe() and it() blocks. 
 2. Chai - Provides readable assertions using expect() to check conditions like status code or returned values. 
 3. Supertest - Simulates HTTP requests (GET, POST, PATCH, DELETE) to test routes and mimic browser behavior.  

*** Covered Test ***
1. User registration with valid credentials
2. User login with valid credentials 
3. User note posting with title, description, and image
4. User note editing (update test/image by note ID)
5. User note deletion (by note ID)

These tests ensure all core features are working as expected and help catch regressions during development. 
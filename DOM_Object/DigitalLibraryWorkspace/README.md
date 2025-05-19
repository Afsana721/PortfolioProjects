# Project: DigitalLibraryWorkspace # 

*** Purpose ***
This app simulates a digital library where users can explore books and submit feedback. It’s designed to help understand JavaScript fundamentals, DOM manipulation, HTTP requests, and interaction with a real online SQL database (Supabase).

*** Features ***
Browse virtual book structure (shelves, books, sections)

Fetch book data using external/public APIs

Submit feedback after reading

Store feedback in a live PostgreSQL database (Supabase)


*** Tech Stack ***
HTML, CSS – Structure and styling

JavaScript – Logic, data flow, fetch, and DOM control

Supabase – Online SQL database for storing feedback

Fetch API – HTTP requests for book data

Modular JS structure using ES modules

*** Folder Structure ***
/DigitalLibraryWorkspace
│
├── index.html         → Main HTML file
├── main.js            → Root JS file (connects everything)
│
├── /dom               → DOM interaction scripts
├── /js                → Logic utilities (e.g., formatters, data builders)
├── /api               → API functions (fetch, post, Supabase handlers)
│
└── README.md          → Project overview and usage


*** Inside Process ***
User lands on index.html

main.js loads and links DOM events

*** On interaction: ***

DOM script captures actions (clicks, inputs)

JS logic processes values

API script fetches book info or submits feedback

DOM updates dynamically based on response or user input


*** Learning Outcome ***
Understand JS object patterns and functional flow

Explore DOM tree and dynamic updates

Learn how HTTP requests work

Use real-world PostgreSQL DB through Supabase

Structure and organize JS apps cleanly
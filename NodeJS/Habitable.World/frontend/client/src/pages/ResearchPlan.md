### Research.jsx ###

*** Purpose of the Page ***
This page showcases nature-related or science-related research topics, possibly including world history or global discoveries — using images, summaries, and real data from external sources.

It’s built to impress, educate, and demonstrate your frontend/backend/API skills.

### How to Build It — Step by Step ###

*** 1. Page Container Setup ***
Create a React functional component called Research.jsx
This component will return one main section (like a wrapper) -
  ** <section className="research-page"> ... </section> **


*** 2. Background Banner Section ***
Inside the wrapper, create a top section with:
Background image (nature museum image or any natural theme)
Overlay with light color or gradient to improve text visibility
This section gives visual appeal and context.


*** 3. Title & Description Section ***
Below the banner, add:
A <h1> for the page title: “Research of Nature” </h1>

A short paragraph (optional) like:
“Explore the world’s most impactful discoveries and field research.”


*** 4. Research Card Grid Section ***
Create a <section className="research-cards">
Inside it, loop over data to show each card:
## Title ##
## Image ##
## Description or summary ##
Optional “Read More” or *** “Explore” *** link

🔹 Purpose of the Page

To showcase nature-related research topics in a clean, readable format with:

A title section with background imagery

A grid of research cards (static or API-driven)

Optional search and dynamic exploration

 1. Background Section with Title

Create a main wrapper: <section id="main">

Add a background image (#backImg)

Apply a white overlay (.overlay) for fading effect

Display:

h1 → Title: "Research of Nature"

a → Source link (to research center or site)


🔹 2. Research Card Grid Section

Add section: <section className="research-cards">

Purpose: display multiple cards in grid layout


 3. Card Content Sources

You have two options:

Local Static Data

Store research card content in data.js file (array of objects)

Each object = { title, image, description, link }

Import and loop using .map()

External API (Dynamic)

Add a search bar

On search input (e.g., "carbon", "tree") → fetch data from external research APIs (Nature.com, CORE.ac.uk, Semantic Scholar)

Store results in state and display using the same card layout

 4. Optional – Search and Filter Feature

Add an input field above .research-cards

On typing, filter local data or trigger API

Update card display accordingly

🔹 5. Layout Flow Summary

#main → Full-page wrapper

#backImg → Background image

.overlay → Light fade layer

#heading → Title & Source

.research-cards → Grid to hold cards (looped from local or API data)

🔹 6. CSS Highlights

Use position: relative/absolute for layering

opacity for fade

Grid or Flexbox for .research-cards

Consistent font and spacing from header.css




### Features Used ###
  *** Feature	Purpose ***
  *** useState	Store API data or local data ***
  *** useEffect	Fetch external API data on load ***
  *** axios	Call external/public API ***
  *** CSS Modules or file	Style layout and visuals ***



#### Explore ####
*** HTML Structure (semantic layout) ***
<main> – Wraps the whole page

<header> – Page title + intro text

<section> – "Explore Topics"

A visual grid/list of topic cards (Tree, Animal, Weather...)

<section> – "Live Data Results"

Where real-time API results will appear after topic click

Optional <footer> or source info at the bottom


 ### React Concepts to Use ###
***     useState    ***
    Track:

    Selected topic

    Fetched data

    Loading state (optional)

***     useContext   ***
Use for:

Sharing selected topic or user preferences globally

Avoid passing props deeply

Define once in context file and read inside Explore.jsx

***     useMemo   ***
Use to:

Optimize filtered topic list

Avoid recalculating filtered results every render

***     useRef     ***
Use to:

Scroll to results when a topic is clicked

Focus on a specific card if needed

***     Props       ***
Only needed if you split topic cards into their own components

e.g., <TopicCard title="Forest" onClick={...} />

***     API Integration (NASA + GBIF) ***
Each topic has a mapped query term

On click:

Send API request to NASA or GBIF depending on topic type

Display results in the second section

Use a helper file (topicsData.js) to link each topic to:

Title

Image

API to call

Search query keyword


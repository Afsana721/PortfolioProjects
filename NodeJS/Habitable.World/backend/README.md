### Habitable.World ###
Habitale.World is a full-stack app designed to explore and educate users about habitable planets, Eart's evolution, nature, and civilization. 

## Uses : ##
*** Frontend - react.js ***
* Built with react.js for a component based UI and interactive user experience. 

* Users react.js fiber tree for efficient DOM rendering and updates (reconciliation).

* Appies Props to pass data from parent to child components - parent acts as controller, leveraging JavaScript clousers. 

* Uses Hooks (like useState, useEffect) to manage component state and side effects.

* Implements useContext to manage global data (e.g. theme, user info) across components. 

* Other advanced features like - useRef, memo, useMemo, forwardRef, etc. 

*** Backend (node.js + express.js) ***
* Manage routes, logic, and data processiong. 

* Connected to Mongodb Atlas for storing content, users and uploads. 

* Users passport.js for authentication and express-session for login session handling.



Step-by-Step UI Overview (No Code)
✅ Step 1: Landing Page (Homepage)
Simple, welcoming message or banner

Short intro: what Habitable.World is about

Button to “Start Exploring” or “Login/Register”

✅ Step 2: Auth Pages
Login Page

Form for email/username and password

Link to register if not a member

Register Page

Form for name, email, password

On success, redirect to dashboard

✅ Step 3: User Dashboard (After Login)
Personalized welcome: e.g., “Welcome back, Afsana!”

Navigation panel or tabs:

Explore Planets

Discover Civilizations

Save Favorites

Log out

✅ Step 4: Explore Planets Page
List of habitable exoplanets (can be mock/static or later from NASA APIs)

Each card shows:

Planet name

Type

Distance from Earth

Habitability score or details

✅ Step 5: Civilization Insights
Timeline-style or grid UI:

Evolution of life

Tribes → Society → Country → Civilization

Option to read, bookmark, or save facts

✅ Step 6: Protect Our World (Awareness Section)
Cards or list with current research or environmental tips

Maybe a few educational images or links

✅ Step 7: Footer + Navigation
Footer: social links, credits

Navigation bar: top or side, for page switching
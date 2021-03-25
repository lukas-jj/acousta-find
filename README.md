# Acoustic Search

A search engine for acoustic guitars.


## To Do

### Data
- Research wood (top, sides, neck), solid tops, body types, neck radiuses, bracing and other potential filters.
- Create more seeds for database and rollback/migrate latest.

### Components
- Refactor each category to be it's own component (category or brands, types, neck_radius etc).
- Add new categories (*front and back end)
- Have a 'no listings found' conditional if no matches are found.

###  SASS / CSS*
- Make the filter/checkboxes appear on the left side only and have the main body be the guitar listing.
- CMD C + CMD V Bulma styles.

### Stretch 
- use external API for guitars so I don't have to spend so long doing research (email Taylor, Cole Clark and Maton support). 
- Create a 'search' bar so the user can serach by name, ideally with autocomplete.
-  Create filters for price, category (a-z) etc.
-  List how many items are available in each category.
-  Conditionally render checkoxes so that when items are not available for that category, the checkbox will not show.
-  Include my own personal filters to get around the fact that every company has a different body type name (taylor uses words like 'baby' for small guitars). I could use general categories such as 'large'.
-  *important* make a survey for new users to help find a guitar. Have questions like 'how old', 'hand size', 'playstyle' and suggest guitars based on answers from the database. Would be amazing!

### Done
- Refactor repeated code on Guitar List handleSubmit function (setAll should be an object with true or false for properties instead of individual booleans so that I can use e.target.name).
- Create 'card' for each guitar in the filtered list. 

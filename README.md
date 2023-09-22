Feel free to delete this and start from scratch.

Plan for the Hackathon
MVP
Sprint 01
Build a basic skeleton (html, css, js and link the files)
Examine API docs
Implement the endpoint in ThunderCloud
Created a bare bones solution using fetch to get the basic data out of the API and log it to the console. 
Basic query, parameters
Satisfied with the data returned from the API, played around by inputting different coordinates & parameters (planned moving to Dubai)
Decide the data we want out of the API (select params)
Compile a URL with a series of params
Log the result

Sprint 02
Display the data from the API on the webpage

(Challenge: We were using an async function to retrieve data from the API but when we wanted to take that data and plug it inside the DOM element, it was giving a promise error. We did a little bit of digging and realized that was because async functions always return promises so we need another async function to await that promise.)

STRETCH GOALS
Sprint 03
Default weather would be based on the hard coded lat/long coordinates (Dubai)
OPTION: Introduce an API to convert place name into lat/long coordinates
form for users to input name of a place
-  	create an input element in the html file
- 	a button to submit the place name
- 	put an event listener on the button. When the event is triggered, we grab the input value & format it into the place name API
- 	amend the fetch function to take the URL as a parameter, so re-use the fetch to call the API
- 	when the data comes back, we plug the lat/long values in the param object
-	fetch the weather from the weather API, populate the screen with it
- 	populate the place name on the screen & clear out the place input form
- 	In case, place is not found, some sort of alert.

Sprint 04
-
NICE-TO-HAVE
Convert the weather code into a text description of the weather & an image
Convert Celcius to Fahrenheit
Style CSS & make it look beautiful

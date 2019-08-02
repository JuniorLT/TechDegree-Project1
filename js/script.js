/** Junior Lam Tiang : Project 1 **/
/** Random Quote Generator **/
/**Treehouse FSJS Techdegree: **/

/* array that holds 5 quotes */
let quotes = [
{
	quote: "I have the high ground.",
	source: "Obi Wan Kenobi",
	citation: "Star Wars Episode III (Revenge of the Sith)",
	year: "2005"
},
{
	quote: "Get over here!",
	source: "Scorpion",
	citation: "Mortal Kombat",
	year: ""
},
{
	quote: "Grass grows, birds fly, sun shines, and brother, I hurt people.",
	source: "The Scout",
	citation: "Team Fortress 2",
	year: ""
},
{
	quote: "It is not that I am so smart, it is just that I stay with problems longer.",
	source: "Albert Einstein",
	citation: "",
	year: ""
},
{
	quote: "If you spend too much time thinking about a thing, you will never get it done.",
	source: "Bruce Lee",
	citation: "",
	year: ""
}
];


/* function that gets a random quote from the array */
function getRandomQuote() {
	let randomNumber = Math.floor(Math.random() * 6);		/* variable set to create a random number between 0 and 5 */
	return quotes[randomNumber]		/*returns the object from the array according to the index position of the random number created above */
}

/* function that will call function above (getting the quote) and will print it */
function printQuote() {
	let randomQuote = getRandomQuote();		/* variable set to call the function when this function is called */
	let box = document.getElementById("quote-box");		/* variable set to get html element that will present the quote once concatenated */
	let text = '';		/* variable set to an empty string */
	text += '<p class="quote">' + randomQuote.quote + '</p>';	/* gets the quote property from the object and concatenates it to the string */
	text += '<p class="source">' + randomQuote.source;	/* gets the source property from the object and concatenates it to the string */

	/* conditional that checks if there is or isn't a citation property */
	if (randomQuote.citation === ""){
		text += '';
	} else{
		text += '<span class="citation">' + randomQuote.citation + '</span>';
	}

	/* conditional that checks if there is or isn't a year property */
	if (randomQuote.year === ""){
		text += '';
	} else{
		text += '<span class="year">' + randomQuote.year + '</span></p>';
	}
	
	/* sets the html element equal to the quote object and it's properties */
	box.innerHTML = text;
}

/* listens for click then prints another quote */
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

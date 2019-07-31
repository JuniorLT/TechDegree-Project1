
Treehouse FSJS Techdegree:

let quotes = [
{
	quote: "I have the high ground."
	source: "Obi Wan Kenobi"
	citation: "Star Wars Episode III (Revenge of the Sith)"
	year: "2005"
},
{
	quote: "Get over here!"
	source: "Scorpion"
	citation: "Mortal Kombat"
	year: ""
},
{
	quote: "Grass grows, birds fly, sun shines, and brother, I hurt people."
	source: "The Scout"
	citation: "Team Fortress 2"
	year: ""
},
{
	quote: "It’s not that I’m so smart, it’s just that I stay with problems longer."
	source: "Albert Einstein"
	citation: ""
	year: ""
},
{
	quote: "If you spend too much time thinking about a thing, you’ll never get it done."
	source: "Bruce Lee"
	citation: ""
	year: ""
}
];


function getRandomQuote() {
	var randomNumber = Math.floor(Math.random() * 6);		/* creates a random number between 0 and 5 */
	return quotes[randomNumber]		/*returns the object from the array according to the index position of the random number created above */
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
	var randomQuote = getRandomQuote();
	var box = document.getElementById("quote-box");
	var text = ''
	var markup = <p class="quote"> [randomQuote.quote] </p>
	<p class="source"> [randomQuote.source]
	<span class="citation"> [randomQuote.citation] </span>
	<span class="year"> [randomQuote.year] </span></p>;
	box = markup;
}


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote(), false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
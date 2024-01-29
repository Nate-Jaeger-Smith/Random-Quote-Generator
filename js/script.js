// Array of quote objects
const quotes = [{
	quote: "Great moments are born from great opportunity.",
	source: "Nikola Tesla",
	tags: "Inspiration"
}, {
	quote: "I don't know what frightens me more, the power that crushes us, or our endless ability to endure it.",
	source: "Gregory David Roberts",
	citation: "Shantaram"
}, {
	quote: "The past is behind, learn from it. The future is ahead, prepare for it. The present is here, live it.",
	source: "Thomas S. Monson"
}, {
	quote: "Liberty, when it begins to take root, is a plant of rapid growth.",
	source: "George Washington",
	citation: "Letter to James Madison",
	year: 1788
}, {
	quote: "The way to get started is to quit talking and begin doing.",
	source: "Walt Disney",
	year: 1957
}, {
	quote: "The future belongs to those who believe in the beauty of their dreams.",
	source: "Eleanor Roosevelt",
	tags: "Motivation, Inspiration"
}, {
	quote: "Experience is merely the name men gave to their mistakes.",
	source: "Oscar Wilde",
	citation: "The Picture of Dorian Grey",
	year: 1890
}];
/***
 *  generates random number
 *  @returns random quote object
 ***/
function getRandomQuote() {
	let random = Math.floor( Math.random() * quotes.length );
	return quotes[ random ];
}
/***
 *  Builds HTML for quote
 *  Displays quote
 ***/
function printQuote() {
	let randomQuote = getRandomQuote();
	let html = `<p class="quote"> ${randomQuote.quote} </p>
              <p class="source"> ${randomQuote.source}`;
	if ( randomQuote.citation ) {
		html += `<span class = "citation"> ${randomQuote.citation} </span>`;
	}
	if ( randomQuote.year ) {
		html += `<span class = "year"> ${randomQuote.year} </span>`;
	}
	if ( randomQuote.tags ) {
		html += `<span class = "tags"> ${randomQuote.tags} </span>`;
	}
	html += `</p>`;
	document.getElementById( 'quote-box' ).innerHTML = html;
}
/***
 *  Generates random RGB values
 *  Assigns RGB color string as backgroundColor
 */
function getRandomBackground(){
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
//Calls both functions in callback
function callFunctions (){
  printQuote();
  getRandomBackground();
}


//Find way to set interval upon refresh of the quote. Clear the old interval when button is clicked
setInterval(callFunctions, 10000);
//Click event listener
document.getElementById( 'load-quote' ).addEventListener( "click", callFunctions, false );
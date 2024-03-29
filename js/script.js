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

// Set a new interval for the quote to auto-refresh
let newInterval = setInterval(printQuote, 6000);

/***
 *  generates random number
 *  @returns random quote object
 ***/
function getRandomQuote() {
	let random = Math.floor( Math.random() * quotes.length );
	return quotes[ random ];
}

/***
 *  Assigns a random quote & builds HTML for quote
 *  Displays quote & new background color
 *  Resets the interval
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
  getRandomBackground();
  resetInterval();
}

/***
 *  Generates random RGB values
 *  Assigns RGB color string as backgroundColor
 */
function getRandomBackground(){
  let rgbValue = () => Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${rgbValue()},${rgbValue()},${rgbValue()})`;
}

/**
 * Resets and creates a new interval
 */
function resetInterval(){
  clearInterval(newInterval);
  newInterval = setInterval(printQuote, 5000);
}

//Click event listener
document.getElementById('load-quote').addEventListener("click", printQuote, false);
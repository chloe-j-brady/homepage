/*For the quote box, I selected the quotes myself 
but didn't know how to implement the "Next" button behavior. 
I used Claude (Anthropic) to help build the cycling logic 
(index state plus wrap-around using modulo).*/

import { useState } from "react";

interface Quote {
  text: string;
  author: string;
}

// A small set of quotes that mean something to me — rotates through
// them with a "Next" button
const quotes: Quote[] = [
  { text: "Everything happens for a reason.", author: "My motto" },
  { text: "Education is the kindling of a flame, not the filling of a vessel.", author: "Socrates" },
  { text: "The world is a book and those who do not travel read only one page.", author: "St. Augustine" },
];

function QuoteBox() {
  const [index, setIndex] = useState(0);

  function nextQuote() {
    // Cycles back to the first quote after the last one
    setIndex((prev) => (prev + 1) % quotes.length);
  }

  return (
    <div className="quote-box">
      <p className="quote-text">"{quotes[index].text}"</p>
      <p className="quote-author">— {quotes[index].author}</p>
      <button className="quote-next" onClick={nextQuote}>
        Next quote →
      </button>
    </div>
  );
}

export default QuoteBox;
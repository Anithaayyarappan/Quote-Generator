const quotes = [

   "Dream big.",
   "Never give up.",
   "Stay consistent.",
   "Believe in yourself.",
   "Code everyday."
]

const quoteText = document.getElementById("quote");
const button = document.getElementById("btn");

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
}

button.addEventListener("click", generateQuote);
// Get elements from the DOM
const quoteText = document.getElementById("quoteText");
const newQuoteBtn = document.getElementById("newQuoteBtn");

// Event listener for the "New Quote" button
newQuoteBtn.addEventListener("click", getNewQuote);

// Function to fetch a new quote from the API
function getNewQuote() {
    // You can replace this URL with any other quote API
    const apiUrl = "https://api.quotable.io/random";

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Update the quote text with the fetched quote
            quoteText.textContent = `"${data.content}" - ${data.author}`;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            quoteText.textContent = "Error fetching quote. Please try again.";
        });
}

// Initial load: Get a quote when the page loads
getNewQuote();

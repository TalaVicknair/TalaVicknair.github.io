window.addEventListener('load', getQuote);

const btn = document.querySelector("button");
btn.addEventListener("click", getQuote);

const endpoint = "https://type.fit/api/quotes";

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
};
  
async function getQuote() {
    let text = await fetch(endpoint);
    let response = await text.text();

    let jsonResponse = JSON.parse(response);

    displayQuote(jsonResponse[getRandomIntInclusive(1, 26)]['text']);
    displayBio(jsonResponse[getRandomIntInclusive(1, 26)]['author']);

    fetch(endpoint)
        .then(function(response) {
            return response.json();
        });
        
};

function displayQuote(x) {
    document.getElementById('js-quote-text').textContent = x;
};

function displayBio(x) {
    document.getElementById('author-text').textContent = x;
};
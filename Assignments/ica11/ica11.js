window.addEventListener('load', getQuote);

const btn = document.querySelector("button");
btn.addEventListener("click", getQuote);

const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

async function getQuote() {
    let text = await fetch(endpoint);
    let response = await text.text();

    let jsonResponse = JSON.parse(response);
    // console.log(jsonResponse['message']);

    displayQuote(jsonResponse['message']);
};

function displayQuote(x) {
    document.getElementById('js-quote-text').textContent = x;
};
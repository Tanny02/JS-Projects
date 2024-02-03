const btn = document.getElementById('btn');
const quote = document.getElementById('quote');
const author = document.getElementById('author');

btn.addEventListener('click', (e) => {
    getQuote();
});

async function getQuote() {

    try {

        btn.disabled = true;
        author.innerText = "Generating quote";
        quote.innerText = "Updating";
        const url = `https://api.quotable.io/random`;

        const response = await fetch(url);
        const data = await response.json();

        setTimeout(() => {
            btn.disabled = false;
            quote.innerText = data.content;
            author.innerText = `~ ${data.author}`;
        }, 500);

    } 
    
    catch (error) {

        setTimeout(() => {
            quote.innerText =  "Error";
            author.innerText = error.message;
            btn.disabled = false;
        }, 1000);

        console.error(error);

    }
}

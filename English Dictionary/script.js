const input = document.getElementById('input');
const infoText = document.getElementById('info-text');
const meaningContainer = document.getElementById('meaning-container');
const title = document.getElementById('title');
const meaning = document.getElementById('meaning');
const audio = document.getElementById('audio');

input.addEventListener('keyup', (e) => {
    if (e.target.value && e.key === 'Enter') {
        fetchApi(e.target.value);
    }
});

async function fetchApi(word) {
    try {

        infoText.innerText = `Searching the meaning of the word "${word}"`;

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.title) {

            meaningContainer.style.display = 'block';
            title.innerText = word;
            meaning.innerText = "N/A";
            audio.style.display = "none";

        }

        else {

            infoText.style.display = 'none';
            meaningContainer.style.display = 'block';
            title.innerText = data[0].word;
            meaning.innerText = data[0].meanings[0].definitions[0].definition;
            audio.style.display = "inline-flex";
            audio.src = data[0].phonetics[0].audio;
        }

    } catch (error) {

        infoText.innerText = 'Error: ' + error.message
        console.error(error);

    };
}

const accessKey = "d4BfTEKkKj3qcO_Ruw9Dal43vz_A95DSw6pOnJ7yI4k";

const formElm = document.querySelector('form');
const input = document.getElementById('search-id');
const searchResults = document.getElementById('search-results');
const messageElm = document.getElementById('message');
const showMoreBtn = document.getElementById('show-more-btn');

let page = 1;

async function searchImage() {
    
    messageElm.style.display = 'none';
    messageElm.style.border = 'none';
    const query = input.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${query}&client_id=${accessKey}`;
    const response = await fetch(url);
    
    const data = await response.json()

    const results = data.results;

    results.map(result => {
        const imageWrapper  = document.createElement('div');
        imageWrapper.classList.add('search-result');
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
        imageLink.rel = 'noopener noreferrer';
        imageLink.textContent = result.alt_description;
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);
    });

    page++;

    if (page > 1) {
        showMoreBtn.style.display = 'block';
        showMoreBtn.addEventListener('click', () => {
            searchImage();
        });
    }
}

formElm.addEventListener('submit', e => {
    e.preventDefault();
    page = 1;
    searchImage();
});


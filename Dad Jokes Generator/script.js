const API_KEY = 'N6TofSwa2pJvd1vJyufNBQ==h1zK1R5VfeM2hWbV';

const btn = document.getElementById('btn');
const joke = document.getElementById('joke');

const options = {
    method: 'GET',
    headers: {
        "X-Api-Key": API_KEY
    }
};

async function getJoke() {
    
    try {

        joke.innerText = "Updating";
        btn.disabled = true;
        btn.innerHTML = "HOLD ON...";

        const url = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
        const response = await fetch(url, options);
        const data = await response.json();

        btn.disabled = false;
        btn.innerHTML = "TELL ME A JOKE";

        joke.innerText = data[0].joke;

    } 
    
    catch (error) {

        setTimeout(() => {

            btn.disabled = false;
            btn.innerHTML = "TELL ME A JOKE";
            joke.innerText = "ERROR: " + error.message;
            console.log(error);

        }, 2000);

    }

}

btn.addEventListener('click', getJoke);

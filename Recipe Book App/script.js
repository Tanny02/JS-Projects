const API_KEY = "90abc91018284d6cb6b311ce7c257129";

const recipeList = document.getElementById("recipe-list");

async function fetchData() {
    
    try {
        const url = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`;
    
        const response = await fetch(url);
        const data = await response.json();
        
        displayRecipes(data.recipes);
    } 
    
    catch (error) {

        console.error(error);

    }

}

function displayRecipes (recipes){

    recipes.forEach((recipe) => {

        const recipeItem = document.createElement('li');
        recipeItem.classList.add('recipe-item');

        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeImage.alt = recipe.title;

        const title = document.createElement('h2');
        title.innerText = recipe.title;

        const ingredients = document.createElement('p');
        ingredients.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(', ')}`;

        const recipeLink = document.createElement('a');
        recipeLink.href = recipe.sourceUrl;
        recipeLink.target = '_blank';
        recipeLink.innerText = 'View Recipe';

        recipeItem.appendChild(recipeImage);
        recipeItem.appendChild(title);
        recipeItem.appendChild(ingredients);
        recipeItem.appendChild(recipeLink);
        recipeList.appendChild(recipeItem);

    });

}

fetchData();

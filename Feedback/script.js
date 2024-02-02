const ratings = document.querySelectorAll(".ratings");

const btn = document.getElementById("btn");

const container = document.getElementById("container");

let selectedRating = "";

ratings.forEach((rating) => {
    rating.addEventListener('click', (e) => {
        removeRating();
        selectedRating = e.target.innerText || e.target.parentNode.innerText;
        e.target.classList.add("active");
        e.target.parentNode.classList.add("active");
    });
});

btn.addEventListener('click', (e) => {
    if (selectedRating !== "") {

        setTimeout(() => {
            container.innerHTML = `<strong>Thank you!</strong>
            <br>
            <br>
            <strong>Feedback:</strong>${selectedRating}
            <p>We'll use your feedback to improve our customer support</p>`;
        }, 1000);

    }
});

function removeRating() {
    ratings.forEach((rating) => {
        rating.classList.remove("active");
    }); 
}

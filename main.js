const button = document.getElementById("btn-submit");
const thankYouContainer = document.getElementById("ThankYou-container");

button.addEventListener("click", () => {
    thankYouContainer.style.display = "block";
    
});
const cancelButton = document.getElementById("cancelButton");

cancelButton.addEventListener("click", () => {
    thankYouContainer.style.display = "none";
});

const ratingButtons = document.querySelectorAll(".btn");
const ratingFeedback = document.getElementById("rating-feedback");
const whatSelected = document.getElementById("what-selected");

ratingButtons.addEventListener('click', () => {
    ratingButtons.classList.add('selected');
});
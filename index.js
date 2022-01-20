const dropdownListContainer = document.querySelector(
    ".dropdown-list-container"
);
const dropdownBtn = document.querySelector(".dropdown-btn");

dropdownBtn.addEventListener("click", function() {
    dropdownListContainer.classList.toggle("show");
});

window.addEventListener("click", function(event) {
    if (!event.target.matches(".dropdown-btn")) {
        dropdownListContainer.classList.remove("show");
    }
});
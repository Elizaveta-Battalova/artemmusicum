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

const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
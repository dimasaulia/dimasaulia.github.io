const NAVBAR = document.getElementById("navbar");
const TOGGLE = document.getElementById("toggle");

TOGGLE.addEventListener("click", (e) => {
    e.preventDefault();
    NAVBAR.classList.toggle("hide-navbar");
    TOGGLE.childNodes[1].classList.toggle("humberger-top-rotation");
    TOGGLE.childNodes[3].classList.toggle("humberger-mid-scale");
    TOGGLE.childNodes[5].classList.toggle("humberger-bottom-rotation");
    console.log(TOGGLE.childNodes[1]);
});

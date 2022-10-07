let ham = document.getElementById("menu");
let nav = document.querySelector(".navbarGo");


ham.addEventListener("click", () => {
    nav.classList.toggle('navbarGo');
    ham.classList.toggle('fa-times');
})
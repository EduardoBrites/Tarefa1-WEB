const btnMob = document.querySelector('#btnMob');

btnMob.addEventListener('click', toggleMenu());

function toggleMenu(){
    const navbar = document.querySelector(".nav");
    navbar.classList.toggle("active");
}
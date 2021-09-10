const buttonMenu = document.getElementById("openMenu");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close");

buttonMenu.addEventListener("click", e => {
    menu.classList.add("menu__container--mobile");
});

closeMenu.addEventListener("click", e => {
    menu.classList.remove("menu__container--mobile");
});
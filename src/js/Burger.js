export { switchMenu };
const burger = document.querySelector('.burger-menu');
const shadow = document.querySelector(".shadow");
const headerNav = document.querySelector(".header__nav");
const navList = document.querySelector(".header__list");
const burgerMenuItem = document.querySelectorAll('.header__nav .list__item')


window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        e.preventDefault;
        closeMenu();
    }
});

window.addEventListener("resize", () => {
    closeMenu();
});


const switchMenu = () => {
    openMenu();
    closeMenu();
}
const openMenu = () => {
    setTimeout(() => {

        document.body.classList.toggle("boody-hidden");
        burger.classList.toggle('open')
        shadow.classList.toggle('show-shadow')
        headerNav.classList.toggle("open-menu");
        navList.classList.toggle("open-menu");
    }, 500)
}
burger.addEventListener("click", openMenu);

const closeMenu = () => {
    setTimeout(() => {
        document.body.classList.remove("boody-hidden");
        burger.classList.remove("open")
        shadow.classList.remove('show-shadow')
        headerNav.classList.remove("open-menu");
        navList.classList.remove("open-menu");
    }, 500)
}
headerNav.addEventListener("click", closeMenu);
burgerMenuItem.forEach((el) => el.addEventListener("click", closeMenu));
shadow.addEventListener("click", closeMenu);
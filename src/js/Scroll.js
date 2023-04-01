
export { linkScroll }

const menuLinks = document.querySelectorAll('.list__link');
const linkScroll = () => {
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        })
    })
}

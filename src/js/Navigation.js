export { addLinkClickHandler }

const addLinkClickHandler = () => {
    document.querySelector(".header__nav").addEventListener('click', (event) => {
        if (event.target.classList.contains("list__link")) {
            let clickedItemLink = event.target;
            removeActiveItem()
            addActiveItem(clickedItemLink)
        }
    })
}
addLinkClickHandler()

const removeActiveItem = () => {
    let navItemsLink = document.querySelectorAll('.header__nav .list__link')
    navItemsLink.forEach((itemLink) => {
        itemLink.classList.remove("list__link--active")
    })
}

const addActiveItem = (clickedItemLink) => {
    clickedItemLink.classList.add("list__link--active")
}
import { switchMenu } from "./js/Burger.js";
import { linkScroll } from "./js/Scroll.js";
import { Modal } from "./js/Modal.js";
import { pets } from "./js/Pets.js";

window.onload = function () {

    addHeroClickHandler();
}

const addHeroClickHandler = () => {
    document.querySelector('.hero__button .button').addEventListener('click', () => {
        generateHeroModal()
    });
}

const generateHeroModal = () => {
    renderModalWindow('Test content for hero modal')
}

const renderModalWindow = (content) => {
    let modal = new Modal('hero-modal')
    modal.buildModal(content)
}
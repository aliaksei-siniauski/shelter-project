import { Modal } from './Modal.js';

export class PetsModal extends Modal {
    constructor(clasess, { id, name, img, type, breed, description, age, inoculations, diseases, parasites }) {
        super(clasess);
        this.id = id;
        this.name = name;
        this.img = img;
        this.type = type;
        this.breed = breed;
        this.description = description;
        this.age = age;
        this.inoculations = inoculations;
        this.diseases = diseases;
        this.parasites = parasites;
    }

    generatePetsModal() {
        let template = "";
        let petsModal = document.createElement("div");
        petsModal.className = "pets-modal__content";

        this.img && (template += `<img class="pets-modal__img" src=${this.img} alt=${this.name}>`)
        if (this.name || this.type || this.breed || this.subtitle || this.description) {
            template += `<div class="pets-modal__info">`
            this.name && (template += `<h3 class="pets-modal__title">${this.name}</h3>`)

            this.type && this.breed && (template += `<h4 class="pets-modal__subtitle">${this.type} - ${this.breed}</h4>`)

            this.description && (template += `<h5 class="pets-modal__text">${this.description}</h5>`)
            template += `<ul class="pets-modal__list">`
            this.age && (template += `<li class="pets-modal__item"><h5>Age:</h5> ${this.age}</li>`)
            this.inoculations && (template += `<li class="pets-modal__item"><h5>Inoculations:</h5> ${this.inoculations}</li>`)
            this.diseases && (template += `<li class="pets-modal__item"><h5>Diseases:</h5> ${this.diseases}</li>`)
            this.parasites && (template += `<li class="pets-modal__item"><h5>Parasites:</h5> ${this.parasites}</li>`)

            template += `</ul>`
        }
        template += `</div>`
        petsModal.innerHTML = template
        return petsModal
    }

    renderModal() {
        let content = this.generatePetsModal();
        super.buildModal(content)
    }


}
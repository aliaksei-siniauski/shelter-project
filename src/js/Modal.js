export class Modal {
    constructor(classes) {
        this.classes = classes;
        this.modal = "";
        this.modalContent = "";
        this.modalCloseBtn = "";
        this.modalCloseIcon = "";
        this.overlay = "";
    }


    buildModal(content) {
        //overlay   
        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay');

        // modal
        this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);


        // modal-content

        this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal-content');

        //close button 

        this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'div', 'modal-close__button');

        //close button-icon
        this.modalCloseIcon = this.createDomNode(this.modalCloseIcon, 'span', 'modal-close__icon', 'icon--close');



        this.setContent(content)
        this.appendModalElements();

        //Bind events 
        this.bindEvents()


        // Open modal
        this.openModal();

    }


    createDomNode(node, element, ...classes) {
        node = document.createElement(element);
        node.classList.add(...classes);
        return node;
    };

    setContent(content) {
        if (typeof content == "string") {
            this.modalContent.innerHTML = content
        } else {
            this.modalContent.innerHTML = '';
            this.modalContent.appendChild(content)
        }
    }

    appendModalElements() {
        this.modal.append(this.modalCloseBtn)
        this.modalCloseBtn.append(this.modalCloseIcon)
        this.modal.append(this.modalContent)
        this.overlay.append(this.modal)
    }

    bindEvents() {
        this.modalCloseBtn.addEventListener('click', this.closeModal)
        this.overlay.addEventListener('click', this.closeModal)
    }

    openModal() {
        document.body.append(this.overlay)
        document.body.classList.add("body-hidden")


    }

    closeModal(e) {
        let classes = e.target.classList
        if (classes.contains('overlay') || classes.contains('modal') || classes.contains('modal-close__button') || classes.contains('modal-close__icon')) {
            document.querySelector('.overlay').remove();
            document.body.classList.remove("body-hidden");
        }
    }
} 
import { data } from "../index.js";


export { arrowClicked }


const slideImges = document.querySelectorAll('.slide__img')
const slideTitles = document.querySelectorAll('.slide__title')
const slide = document.querySelectorAll('.slide')
const prevArrow = document.getElementById('arrow-left')
const nextArrow = document.getElementById('arrow-right')

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

const setPetsCard = (array) => {
    const slider = document.querySelector('.slider')
    let opacity = 0;
    let fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        slider.style.opacity = opacity;
        opacity += 0.05;
        slideTitles[0].textContent = data[array[0]].name;
        slide[0].dataset.id = array[0];
        slideImges[0].src = data[array[0]].img;
        slideTitles[1].textContent = data[array[1]].name;
        slide[1].dataset.id = array[1];
        slideImges[1].src = data[array[1]].img
        slideTitles[2].textContent = data[array[2]].name;
        slide[2].dataset.id = array[2];
        slideImges[2].src = data[array[2]].img;
    }, 50)
}

const getPetsCards = () => {
    const array = []
    while (true) {
        const randomNumber = getRandomNumber(8)
        if (array.indexOf(randomNumber, 0) === -1) {
            array.push(randomNumber)

        }
        if (array.length === 3) {
            break
        }
    }
    setPetsCard(array)
}
getPetsCards()

const arrowClicked = () => {
    let array = [];
    for (let i = 0; i < 3; i++) {
        array.push(Number(slide[i].dataset.id));
    }
    while (true) {
        const randomNumber = getRandomNumber(8);
        if (array.indexOf(randomNumber, 0) === -1) {
            array.push(randomNumber);

        }
        if (array.length === 6) {
            break;
        }
    }
    array.splice(0, 3)
    setPetsCard(array);
}
    ;

prevArrow.addEventListener('click', arrowClicked)


nextArrow.addEventListener('click', arrowClicked)

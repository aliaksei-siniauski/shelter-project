import { data } from "../pets.js";

export { lastPageClicked, nextPageClicked, previousPageClicked, firstPageClicked }

const slideTitles = document.querySelectorAll('.slide__title')
const slideImges = document.querySelectorAll('.slide__img')
const slide = document.querySelectorAll('.slide')

const doublePrevArrow = document.getElementById('double-prev');
const doubleNextArrow = document.getElementById('double-next');
const prevArrow = document.getElementById('prev');
const nextArrow = document.getElementById('next');
const pageNumber = document.getElementById('page-number')
let currentPage = 1;

const generateArray = (length) => {
    let array = [];
    let number = 0;
    for (let i = 0; i < length; i++) {
        if (number === 7) {
            number = 0
        } else {
            number++;
        }
        array.push(number);
    }
    return array;
}


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const sliceArray = (arrayCount, itemsPerArray, initArray) => {
    let number = 0;
    let array = [];
    for (let i = 0; i < arrayCount; i++) {
        array.push(shuffleArray(initArray.slice(number, number + itemsPerArray)));
        number = number + itemsPerArray;

    }
    return array;
}


const getPetsCards = () => {
    let array = generateArray(48);
    let width = document.body.offsetWidth;
    let petsArrayIndexes = [];

    if (width > 1279) {
        petsArrayIndexes = sliceArray(6, 8, array);
    }
    else if (width <= 1279 && width > 767) {
        petsArrayIndexes = sliceArray(8, 6, array);
    }
    else {
        petsArrayIndexes = sliceArray(16, 3, array);
    }
    return petsArrayIndexes;
}

const setPetsCard = (array, page) => {
    const slider = document.querySelector('.pets__slider')
    let opacity = 0;
    let fadeIn = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(fadeIn);
        }
        slider.style.opacity = opacity;
        opacity += 0.05;
        for (let i = 0; i < array[page].length; i++) {
            slideTitles[i].textContent = data[array[page][i]].name;
            slide[i].dataset.id = array[page][i];
            slideImges[i].src = data[array[page][i]].img;
        }
    }, 50)
    page--;

}

let indexes = getPetsCards();
setPetsCard(indexes, currentPage);


const disableNextPage = () => {
    doubleNextArrow.classList.add('pagination--inactive');
    nextArrow.classList.add('pagination--inactive');
    doublePrevArrow.classList.remove('pagination--inactive');
    prevArrow.classList.remove('pagination--inactive');
}
const disablePrevPage = () => {
    doubleNextArrow.classList.remove('pagination--inactive');
    nextArrow.classList.remove('pagination--inactive');
    doublePrevArrow.classList.add('pagination--inactive');
    prevArrow.classList.add('pagination--inactive');
}
const firstPageClicked = () => {
    currentPage = 1;
    pageNumber.textContent = currentPage;
    setPetsCard(indexes, currentPage);
    disablePrevPage()
}

const previousPageClicked = () => {
    currentPage--;
    pageNumber.textContent = currentPage;
    setPetsCard(indexes, currentPage);
    if (currentPage === 1) {
        disablePrevPage()
    }
    else {
        doubleNextArrow.classList.remove('pagination--inactive');
        nextArrow.classList.remove('pagination--inactive');
    }
}


const nextPageClicked = () => {
    currentPage++;
    pageNumber.textContent = currentPage;
    setPetsCard(indexes, currentPage);
    if (currentPage === indexes.length) {
        disableNextPage();
    }
    else {
        doublePrevArrow.classList.remove('pagination--inactive');
        prevArrow.classList.remove('pagination--inactive');
    }



}
const lastPageClicked = () => {
    currentPage = indexes.length;
    pageNumber.textContent = indexes.length;
    setPetsCard(indexes, indexes.length);
    disableNextPage();
}

doublePrevArrow.addEventListener('click', firstPageClicked);
prevArrow.addEventListener('click', previousPageClicked);
nextArrow.addEventListener('click', nextPageClicked);
doubleNextArrow.addEventListener('click', lastPageClicked);
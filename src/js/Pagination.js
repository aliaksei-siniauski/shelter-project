export { generateArray }


const generateArray = (length) => {
    let newArray = [];
    let number = 0;
    for (let i = 0; i < length; i++) {
        newArray.push(number);
        number = number === 7 ? 0 : ++number;
    }
    return newArray;
}


function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;

}

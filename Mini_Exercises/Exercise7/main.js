

function randomNum(min, max) {
    let displayRandomNumber = document.querySelector("#displayRandomNumber");

    let number =  Math.random() * (max - min) + min;

    displayRandomNumber.innerHTML = parseInt(number).toFixed(0); 
}
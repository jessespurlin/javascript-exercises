

function getMonth() {
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let userInput = document.querySelector('#userInput');
    let month = '';

    //try catch errors

    month = monthNames[userInput.value - 1];
    document.querySelector('#output').innerHTML = month;


    
}
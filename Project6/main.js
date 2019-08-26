
// array of colors for background
var colors = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];

var i = 0; // initialize index for colors array
var pageClock = document.getElementById("clock");

function colorChange() {
    document.body.style.backgroundColor = colors[i];
    
    if (i < colors.length - 1) {
        i++;
    } else {
        i = 0;
    }
    
    // wait 1 second then change the color
    setTimeout(colorChange, 1000);
}    

function prependZeroToSingleDigitNumbers(num) {
    // Adds a zero to single digit numbers 
    // ex: "8" returns "08"
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}

function setTime() {
    var date = new Date(); // initialize current time

    var hour = prependZeroToSingleDigitNumbers((date.getHours() % 12));
    var minute = prependZeroToSingleDigitNumbers(date.getMinutes());
    var second = prependZeroToSingleDigitNumbers(date.getSeconds());

    // change modulus at noon and midnight to read '12' instead of '0'
    if (hour === "00"){
        hour = "12";
    }

    pageClock.innerHTML = hour + ' : ' + minute + ' : ' + second;

    // wait 1 second then change time
    setTimeout(setTime, 1000);
}

function clock(){
    colorChange();
    setTime();
}

// wait until entire page loads, then run clock function
window.onload = clock;

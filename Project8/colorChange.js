
// array of colors for background
var colors = ['#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];

var i = 0; // initialize index for colors array
var clockBackground = document.getElementById("clock");

function colorChange() {    
    clockBackground.style.backgroundColor = colors[i];
    if (i < colors.length - 1) {
        i++;
    } else {
        i = 0;
    }
    // wait 1 second then change the color
    setTimeout(colorChange, 1000);
}   
// wait until entire page loads, then run clock function
window.onload = colorChange;

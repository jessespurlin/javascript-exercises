

var images = ["img/background1.jpg", "img/background2.jpg", "img/background3.jpg"];
var backgroundImage = document.getElementById("background-image");
var i = 0;
var time = 3000; // 3 seconds

function changeImage() {
    backgroundImage.src = images[i];
    // a "for loop" is not appropriate here, because it needs to loop back on itself

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    // wait 3 seconds then change image 
    setTimeout(changeImage, time);
}    
// wait until entire page loads, then run 'changeImage' function
window.onload = changeImage;




var images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg"];
var previousButton = document.getElementById("previousButton");
var nextButton = document.getElementById("nextButton");
var slideshow = document.getElementById("slideshow");
var i = 0; // index for array of slideshow images

function nextImage() {
    // if there are more images in the array...
    if (i < images.length - 1) {
        i++;
    } else { // if the last image is being displayed, 
        //loop back to the beginning of the array
        i = 0;
    }
    // change the image on the page
    slideshow.src = images[i];
}    

function previousImage() {
    // if there are more images in the array...
    if (i > 0) {
        i--;
    } else {// the first image is being displayed, 
        //loop back to the end of the array
        i = images.length - 1;
    }
    // change the image on the page
    slideshow.src = images[i];
}    

// display next image when you click the next button
nextButton.onclick = nextImage;

// display previous image when you click the previous button
previousButton.onclick = previousImage;



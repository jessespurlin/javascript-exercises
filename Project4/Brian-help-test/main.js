
// // Removed unnecessary spaces between "img / imagename.jpg"
// var backgroundImg = ["img/background1.jpg", "img/background2.jpg", "img/background3.jpg"];
// // Store your DOM body backgroundImage element in a variable
// var changingBackground = document.getElementById("changing-background");

// imageChanger = "url(" + backgroundImg[0] + ")";

// function changeImage() {
//     // if we are not at the end of the array, move to the next array index
//     for (var i = 0; i < backgroundImg.length; i++) {
        
//         // set the imageChanger DOM element to the index variable of the array
//         imageChanger = "url(" + backgroundImg[i] + ")"; 
//     }
//     setTimeout(changeImage, 500);
// }


var backgroundImg = ["img/background1.jpg", "img/background2.jpg", "img/background3.jpg"];
// Store your DOM body backgroundImage element in a variable
var imageChanger = document.getElementById("changing-background");

function changeImage() {
    
    // if we are not at the end of the array, move to the next array index
    for (i = 0; i < backgroundImg.length; i++) {
        if (i == backgroundImg.length){
            i = 0;
        } else {
            console.log(backgroundImg[i]);
            // set the imageChanger DOM element to the index variable of the array
            imageChanger.src = backgroundImg[i];
        }
    }
    setInterval( changeImage, 2000 ); // 500 will change the image every 500 millisecond (0.5 seconds)
}
// window.onload = changeImage;
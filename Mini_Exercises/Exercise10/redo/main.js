
function tempTest(){
  // get temperature value from user input
  let userInput = document.getElementById("userInput").value;

  let displayResult = document.getElementById("displayResult");
  
  // Test if the value entered is less than -50 or greater than 140
  if(userInput < -50 || userInput > 140){
    // if it is display error message
    displayResult.innerHTML = "Error! Enter a valid temp!";
  } else if(userInput < 32){
    // test if value is less than 32
    // display "freezing"
    displayResult.innerHTML = "FREEZING! ❄️";
  } else if(userInput >= 32 && userInput < 50){
    // test if value is between 32 and 50
    // display "cold"
    displayResult.innerHTML = "COLD!";
  } else if(userInput >= 50 && userInput < 65){
    // test if value is between 50 and 65
    // display "chilly"
    displayResult.innerHTML = "CHILLY!";
  } else if(userInput >= 65 && userInput < 80){
    // test if value is between 65 and 80
    // display "warm"
    displayResult.innerHTML = "WARM!";
  } else {
    // test if value is greater than 80
    // display "hot"
    displayResult.innerHTML = "HOT!";
  }
}

/*
* Basic if/else statement
*/

// if(something){
//   something something;
// } else if(something){ 
//   something something;
// } else {

// }
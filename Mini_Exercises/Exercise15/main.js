

function changeMessage(){
  let input = document.getElementById('userInput').value;
  let output = input.replace(/cry/, "smile 😊");

  document.querySelector('h2').textContent = output;
}
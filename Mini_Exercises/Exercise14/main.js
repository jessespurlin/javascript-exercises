
function displayBirthMonth(){

  let birthMonth = {
    January: "Julia",
    February: "Fergie",
    March: "Mary",
    April: "Angela",
    May: "Meredith",
    June: "Juno",
    July: "Julie",
    August: "Alice",
    September: "Sally",
    October: "Octavia",
    November: "Nichole",
    December: "Denise"
  };

  let result = "";

  for(let prop in birthMonth){
     result += prop + " = " + birthMonth[prop] + "<br>";
  }
  console.log(result);
  document.getElementById('display').innerHTML = result;
}

// displayBirthMonth();
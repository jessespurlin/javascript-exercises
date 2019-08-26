let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function displaySelectMonths(){
  let count = 0;
  let selectedMonths;

  while(count < 12){
    if(count == 0 || count == 2 || count == 3 || count == 4 || count == 11){
      document.getElementsByTagName('h2')[0].textContent += " " + month[count];
    }
    count++;
  }
}
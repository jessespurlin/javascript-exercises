const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function displayTime(){
    let dateObject = document.querySelector("#dateObject");
    let time = document.querySelector("#time");
    let calendarDate = document.querySelector("#calendarDate");
    
    let date = new Date();
    let hh = date.getHours();
    let mm = ("0" + date.getMinutes()).slice(-2);
    let ss = ("0" + date.getSeconds()).slice(-2);
    let monthNum = date.getMonth();
    let month = monthNames[monthNum];
    let year = date.getFullYear();
    let day = date.getDate();


    dateObject.innerHTML = date;
    time.innerHTML = `${hh}:${mm}:${ss}`;
    calendarDate.innerHTML = `${month} ${day}, ${year}`
}
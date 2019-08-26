
function setMyDate() {
    let displayDate = document.querySelector("#displayDate");
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let date = new Date();
    date.setFullYear(2020, 0, 01);

    displayDate.innerHTML = `January 1st, 2020 will be a ${dayNames[date.getDay()]}`;

}
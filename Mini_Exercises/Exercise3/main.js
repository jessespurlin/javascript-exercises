

function displayInfo(){
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let address = document.querySelector("#address").value;
    let info = document.querySelector("#info");

    let text = `${name}, you are ${age} years old and live at ${address}.`;
    console.log(text);
    
    info.innerHTML = text;
}
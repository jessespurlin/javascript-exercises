
function changeColor() {
    let button = document.querySelector("button");
    
    if (button.style.backgroundColor == "green") {
        button.style.backgroundColor = "red";
    } else {
        button.style.backgroundColor = "green";
    }
}
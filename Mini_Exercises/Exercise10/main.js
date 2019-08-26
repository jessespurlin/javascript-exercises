
function howColdIsIt(){

    let tempInput = document.querySelector("#tempInput");
    let output = document.querySelector("#output");

    if (tempInput.value < -50 || tempInput.value > 140){
        output.innerHTML = "Please enter a value between -50 and 140 degrees fahrenheit";
    } else if (tempInput.value < 32){
        output.innerHTML = `❄️ It is FREEZING outside ❄️`;
    } else if (tempInput.value < 60){
        output.innerHTML = " It is COLD outside";
    } else if (tempInput.value < 70){
        output.innerHTML = "It is CHILLY outside";
    } else if (tempInput.value < 85){
        output.innerHTML = "☀️ It is WARM outside ☀️";
    } else if (tempInput.value < 140){
        output.innerHTML = "🔥 It is HOT outside 🔥";
    }
}
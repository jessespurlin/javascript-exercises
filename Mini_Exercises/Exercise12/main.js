

function getSeason() {
    let userInput = parseInt(document.querySelector('#userInput').value)
    let season;

    switch (userInput){
        case 12: 
        case 1:
        case 2: season = "Winter"; break;
        case 3:
        case 4: 
        case 5: season = "Spring"; break;
        case 6:
        case 7:
        case 8: season = "Summer"; break;
        case 9:
        case 10:
        case 11: season = "Fall"; break;
        default: season = "Please enter a valid number";
    }
    //try catch errors

    document.querySelector('#output').innerHTML = season;


    
}
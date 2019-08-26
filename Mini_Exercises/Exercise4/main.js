

function displayInfo(){
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;
    let info = document.querySelector("#info");

    let nameObj = {
        fName: firstName,
        lName: lastName,
        fullName: function(fName, lName){
            return `Your full name is ${this.fName} ${this.lName}`
        }
    }

    info.innerHTML = nameObj.fullName();    
}
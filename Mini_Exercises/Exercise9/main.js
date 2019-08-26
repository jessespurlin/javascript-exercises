
function compareStrings() {
    str1 = document.getElementById("str1").value;
    str2 = document.getElementById("str2").value;
    if (str1 !== str2) {
        document.querySelector("#displayResults").innerHTML = "Strings DO NOT match!!!";
    } else {
         document.querySelector("#displayResults").innerHTML = "Strings match!";
    }
}

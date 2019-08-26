
var loginForm = document.forms.loginForm;

loginForm.onsubmit = function(){
    if (loginForm.email.value == "" || loginForm.name.value == "") {
        alert("Please check the fields and make sure they are not blank.");
        return false;
    } else {
        return true;
    }
};
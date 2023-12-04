document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 


        var isValid = validateUserData();

    
        if (isValid) {
            form.submit();
        }
    });
});

function validateUserData(e){
    
    var error = 0;

    error = validateName(error);
    error = validateEmail(error);
    error = validatepNumber(error);
    error = validateMessage(error);
    

    if (error === 0){
        return true;
    }
    else{

        return false;
    }
    
}
function validateName(errorFound){
    var userdata = document.getElementById("name").value;
    var illegalChars = /\W/;
    if (document.getElementById("name").value == ""){
        document.getElementById("errorName").innerHTML = "Required";
        return ++errorFound;
    }
    else if (document.getElementById("name").value.length < 6 || document.getElementById("name").value.length > 20) {
        errorName.innerHTML = "Name must be between 6 and 20 characters";
        return ++errorFound;
    }
    
    else if(illegalChars.test(userdata)){
        document.getElementById("errorName").innerHTML = "Your name cannot contain illegal characters.";
    }
    else{
        document.getElementById("errorName").innerHTML = "*";
        return errorFound;
    }
}
function validateEmail(errorFound){
    var userdata = document.getElementById("email").value;
    var regExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    
    if (regExpression.test(userdata)){
        document.getElementById("errorEmail").innerHTML = "*";
        return errorFound;
    }
    else {
        document.getElementById("errorEmail").innerHTML = "The email address is not valid";
        return ++errorFound;
    }
}
function validatepNumber(errorFound){
    var userdata = document.getElementById("pNumber").value;
    var illegalChars = /\W/;
    if (document.getElementById("pNumber").value.length < 8 || document.getElementById("pNumber").value.length > 10) {
        errorpNumber.innerHTML = "Phone number must be between 8 and 10 characters";
        return ++errorFound;
    }
    else if(illegalChars.test(userdata)){
        document.getElementById("errorpNumber").innerHTML = "Your phone number cannot contain illegal characters.";
    }
    else{
        document.getElementById("errorpNumber").innerHTML = "*";
        return errorFound;
    }

}
function validateMessage(errorFound){
    var userdata = document.getElementById("message").value;
    if(userdata.length < 10){
        document.getElementById("errorMessage").innerHTML = "Must be more than 10 characters.";
        return ++errorFound;
    }
    else{
        document.getElementById("errorMessage").innerHTML = "*";
        return errorFound;
    }
}


function validateUserDataReg(e){
    var error = 0;

    error = validateUsername(error);
    error = validateEmailR(error);
    error = validatePassword(error);
    error = validatecPassword(error);
    error = validatefName(error);
    error = validateSurname(error);
    error = validateAddress(error);
    error = validateSuburb(error);
    error = validatePostcode(error);
    error = validatepNumberR(error);

    if (error === 0){
        return true;
    }
    else{

        return false;
    }
}
function validateUsername(errorFound){
    var userdata = document.getElementById("username").value;
    var illegalChars = /\W/;
    if (userdata.length < 6 || userdata.length > 20){
        document.getElementById("errorUsername").innerHTML = "Your username must be 6 to 20 characters.";
        return ++errorFound;
    }
    else if (illegalChars.test(userdata)){
        document.getElementById("errorUsername").innerHTML = "Your username cannot contain illegal characters.";
        return ++errorFound;
    }
    else{
        document.getElementById("errorUsername").innerHTML = "*";
        return errorFound;
    }

}
function validateEmailR(errorFound){
    var userdata = document.getElementById("emailR").value;
    var regExpression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(regExpression.test(userdata)){
        document.getElementById("errorEmailR").innerHTML = "*";
        return errorFound;
    }
    else{
        document.getElementById("errorEmailR").innerHTML = "Must be a valid email address";
        return ++errorFound;
    }
}
function validatePassword(errorFound){
    var userdata = document.getElementById("password").value;
    if(userdata.length < 6 || userdata.length > 12){
        document.getElementById("errorPassword").innerHTML = "Must be between 8 characters and 12 characters.";
        return ++errorFound;
    }
    else{
        document.getElementById("errorPassword").innerHTML = "*"
        return errorFound;
    }
}
function validatecPassword(errorFound){
    var userdata = document.getElementById("cpassword").value;
    var userdatac = document.getElementById("password").value;
    if(userdata != userdatac){
        document.getElementById("errorcPassword").innerHTML = "Password must match.";
        return ++errorFound;
    }
    else{
        document.getElementById("errorcPassword").innerHTML = "*";
        return errorFound;
    }
}
function validatefName(errorFound){
    var userdata = document.getElementById("fName").value;
    var illegalChars = /\W/;
    if(userdata.length < 3 || userdata.length > 20){
        document.getElementById("errorfName").innerHTML = "Must be between 3 and 20 characters.";
        return ++errorFound;
    }
    else if(illegalChars.test(userdata)){
        document.getElementById("errorfName").innerHTML = "Must not contain illegal characters."
    }
    else{
        document.getElementById("errorfName").innerHTML = "*";
        return errorFound;
    }
}
function validateSurname(errorFound){
    var userdata = document.getElementById("surname").value;
    var illegalChars = /\W/;
    if(userdata.length < 3 || userdata.length > 20){
        document.getElementById("errorSurname").innerHTML = "Must be between 3 and 20 characters.";
        return ++errorFound;
    }
    else if(illegalChars.test(userdata)){
        document.getElementById("errorSurname").innerHTML = "Must not contain illegal characters."
    }
    else{
        document.getElementById("errorSurname").innerHTML = "*";
        return errorFound;
    }
}
function validateAddress(errorFound){
    var userdata = document.getElementById("address").value;

    if(userdata.length < 3 || userdata.length > 20){
        document.getElementById("errorAddress").innerHTML = "Must be between 3 characters and 20 characters.";
        return ++errorFound;
    }
    else{
        document.getElementById("errorAddress").innerHTML = "*";
        return errorFound;
    }
}
function validateSuburb(errorFound){
    var userdata = document.getElementById("suburb").value;

    if(userdata.length < 3 || userdata.length > 20){
        document.getElementById("errorSuburb").innerHTML = "Must be between 3 characters and 20 characters.";
        return ++errorFound;
    }
    else{
        document.getElementById("errorSuburb").innerHTML = "*";
        return errorFound;
    }
}
function validatePostcode(errorFound){
    var userdata = document.getElementById("postcode").value;
    if(userdata.length != 4){
        document.getElementById("errorPostcode").innerHTML = "Must be 4 characters.";
        return ++errorFound;
    }
    else{
        document.getElementById("errorPostcode").innerHTML = "*";
        return errorFound;
    }
}
function validatepNumberR(errorFound){
    var userdata = document.getElementById("pNumberR").value;
    var illegalChars = /\W/;
    if (document.getElementById("pNumberR").value.length < 8 || document.getElementById("pNumberR").value.length > 10) {
        document.getElementById("errorpNumberR").innerHTML = "Phone number must be between 8 and 10 characters";
        return ++errorFound;
    }
    else if(illegalChars.test(userdata)){
        document.getElementById("errorpNumberR").innerHTML = "Your phone number cannot contain illegal characters.";
    }
    else{
        document.getElementById("errorpNumberR").innerHTML = "*";
        return errorFound;
    }
}
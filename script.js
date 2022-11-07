alert("Be sure to test or check the Form validations by using the Email input. Thanks");
const form = document.querySelector("form");
const email = document.getElementById("email");
const emailErrorText = document.querySelector(".error-text");
const errorIcon = document.getElementById("error-icon");


email.addEventListener("input", function(event) {
    //Each time the user types something, check if the form fields are valid//
    if (email.validity.valid) {
        // In case there is an error message, if the field is valid, we remove the message
        emailErrorText.textContent = ""; // reset the content of the error message
        emailErrorText.className = "error-text"; // Restores the visual state of the error message
        errorIcon.style.display = "none"; //Removes the error icon if the email is valid
        
    } else {
        // If there is still an error, display the correct error message
        showError();
    }
})


form.addEventListener("submit", function (event) {
    // If the email filed is valid, we let the form submit it. If isn't, we display the correct error message
    if (!email.validity.valid) {
        showError();
        //and prevent the form from submitting it
        event.preventDefault();
    } else {
        alert("Your email has been submitted."); // Sends an alert to tell the user that their email has been submitted
    }
})


function showError() {
    if (email.validity.valueMissing) {
        // If the email field is empty
        emailErrorText.textContent = "The email address field cannot be empty!";
        errorIcon.style.display = "block"; //Displays the error icon when there is an error
    } else if(email.validity.typeMismatch) {
        // If the email field doesn't contain an email address, display this error message
        emailErrorText.textContent = "Please provide a valid email.";
        errorIcon.style.display = "block"; //Displays the error icon when there is an error
    } else if (email.validity.tooShort) {
        // If the data entered is too short, Display this error message
        emailErrorText.textContent = `Email should be at least ${email.minLength} characters; You entered ${email.value.length} characters.`
        errorIcon.style.display = "block"; //Displays the error icon when there is an error
    }
}
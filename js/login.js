// Login Input function 
function getLoginInput(emailFieldId, passwordFieldId) {
    // Getting Input 
    const emailField = document.getElementById(emailFieldId);
    const passwordField = document.getElementById(passwordFieldId)

    // extracting value 
    const email = emailField.value;
    const password = passwordField.value;

    // Returning value 
    return [email, password];
}

// Login Handler 
document.getElementById('login-btn').addEventListener('click', function() {
    // Getting Input value 
    const loginInput = getLoginInput('email-field', 'password-field');
    const email = loginInput[0];
    const password = loginInput[1];

    // Checking email and password they matching or not 
    if (email == 'customer@gmail.com' && password == 'password') {
        window.location.href = 'banking.html';
    } else {
        alert('Please Enter Valid Email or Password');
    }
})
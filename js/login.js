function getLoginInput(emailFieldId, passwordFieldId) {
    const emailField = document.getElementById(emailFieldId);
    const passwordField = document.getElementById(passwordFieldId)

    // extracting value 
    const email = emailField.value;
    const password = passwordField.value;

    return [email, password];
}

document.getElementById('login-btn').addEventListener('click', function() {
    const loginInput = getLoginInput('email-field', 'password-field');
    const email = loginInput[0];
    const password = loginInput[1];

    if (email == 'customer@gmail.com' && password == 'password') {
        window.location.href = 'banking.html';
    }
})
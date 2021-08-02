let submitButton = document.getElementById("submit-button");
let firstNameInput = document.getElementById("firstName-input");
let emailInput = document.getElementById("email-input");
let passwordInput = document.getElementById("password-input");
let repeatPasswordInput = document.getElementById("repeat-password-input");

async function register() {
    let response = await fetch('http://130.185.120.192:5000/user/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: emailInput.value, password: passwordInput.value}) // TODO: Send first name also...
    });
    if (response.ok) document.location = "index.html";
    else {
        swal({ // TODO: Better failed messages (wrong data, connection,...)
            title: 'Register failed',
            text: 'Please try again',
            type: 'error',
            confirmButtonColor: '#4C956C',
            confirmButtonText: 'Cancel',
        }).then(() => {
        });
    }
}

submitButton.onclick = () => {
    if (passwordInput.value !== repeatPasswordInput.value) {
        // TODO: Show alert error...
        return;
    }
    register();
};
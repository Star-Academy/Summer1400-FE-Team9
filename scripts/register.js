let submitButton = document.getElementById("submit-button");
let firstNameInput = document.getElementById("firstName-input");
let emailInput = document.getElementById("email-input");
let passwordInput = document.getElementById("password-input");
let repeatPasswordInput = document.getElementById("repeat-password-input");

async function register() {
    let url = new URL('http://130.185.120.192:5000/user/register'),
        params = { firstName: firstNameInput.value, email: emailInput.value, password: passwordInput.value };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    let response = await fetch(url);
    if (response.ok) document.location = "index.html";
    else console.log("Server error"); // TODO: Alert error
}

submitButton.onclick = () => {
    if (passwordInput.value !== repeatPasswordInput.value) {
        // TODO: Show alert error...
        return;
    }
    register();
};
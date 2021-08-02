let submitButton = document.getElementById("submit-button");
let emailInput = document.getElementById("email-input");
let passwordInput = document.getElementById("password-input");

async function login() {
    let url = new URL('http://130.185.120.192:5000/user/login'),
        params = { email: emailInput.value, password: passwordInput.value };
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    let response = await fetch(url);
    if (response.ok) document.location = "index.html";
    else console.log("Server error"); // TODO: Alert error
}

submitButton.onclick = () => login();
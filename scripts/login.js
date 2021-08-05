let submitButton = document.getElementById("submit-button");
let emailInput = document.getElementById("email-input");
let passwordInput = document.getElementById("password-input");

async function login() {
    let response = await fetch('http://130.185.120.192:5000/user/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: emailInput.value, password: passwordInput.value})
    });
    if (response.ok) {
        let json = await response.json();
        await fetch('http://130.185.120.192:5000/playlist/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: "favorites", token: json.token})
        });
        localStorage.setItem("is-logged-in", "true");
        localStorage.setItem("token", json.token);
        document.location = "index.html";
    } else {
        swal({ // TODO: Better failed messages (wrong data, connection,...)
            title: 'Login failed',
            text: 'Please try again',
            type: 'error',
            confirmButtonColor: '#4C956C',
            confirmButtonText: 'Cancel',
        }).then(() => {
        });
    }
}

submitButton.onclick = () => login();

// toggle:

let checkbox = document.getElementById("toggle");

checkbox.addEventListener('change', function() {
    if (this.checked) {
        console.log("Checkbox is checked..");
    } else {
        console.log("Checkbox is not checked..");
    }
});
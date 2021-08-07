const submitButton = document.getElementById("submit-button");
const usernameInput = document.getElementById("username-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const repeatPasswordInput = document.getElementById("repeat-password-input");

async function register() {
    let response = await fetch('http://130.185.120.192:5000/user/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: emailInput.value, password: passwordInput.value, username: usernameInput.value})
        // TODO: Send first name also...
    });
    if (response.ok) {
        console.log(await response.text());
        await fetch('http://130.185.120.192:5000/playlist/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: "favorites"})
        });
        document.location = "index.html";
    }
    else {
        swal({ // TODO: Better failed messages (wrong data, connection,...)
            title: 'خطا',
            text: 'لطفا مجددا تلاش نمایید',
            type: 'error',
            confirmButtonColor: '#4C956C',
            confirmButtonText: 'بازگشت',
        }).then(() => {
        });
    }
}

submitButton.onclick = () => {
    if (passwordInput.value !== repeatPasswordInput.value) {
        swal({ // TODO: Better failed messages (wrong data, connection,...)
            title: 'خطا',
            text: 'رمز عبور و تکرار آن، هم‌خوانی ندارند',
            type: 'error',
            confirmButtonColor: '#4C956C',
            confirmButtonText: 'بازگشت',
        }).then(() => {
        });
        return;
    }
    register();
};

// toggle:

let checkbox = document.getElementById("toggle");

checkbox.addEventListener('change', function() {
    if (this.checked) {
        console.log("Checkbox is checked..");
    } else {
        console.log("Checkbox is not checked..");
    }
});
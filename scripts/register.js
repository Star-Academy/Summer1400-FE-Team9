const submitButton = document.getElementById("submit-button");
const usernameInput = document.getElementById("username-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const repeatPasswordInput = document.getElementById("repeat-password-input");

async function getRegisterResponse() {
    return await fetch('http://130.185.120.192:5000/user/register', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: emailInput.value, password: passwordInput.value, username: usernameInput.value})
        // TODO: Send first name also...
    });
}

async function createInitialFavoritesPlaylist() {
    await fetch('http://130.185.120.192:5000/playlist/create', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: "favorites"})
    });
}

async function register() {
    let response = await getRegisterResponse();
    if (response.ok) {
        await createInitialFavoritesPlaylist();
        document.location = "index.html";
    }
    else {
        swal(genericErrorAlertDetails).then(() => {
        });
    }
}

submitButton.onclick = () => {
    if (passwordInput.value !== repeatPasswordInput.value) {
        swal({ // TODO: Better failed messages (wrong data, connection,...)
            title: 'خطا',
            text: 'رمز عبور و تکرار آن، هم‌خوانی ندارند',
            type: 'error',
            confirmButtonColor: alertColor,
            confirmButtonText: 'بازگشت',
        }).then(() => {
        });
        return;
    }
    register();
};
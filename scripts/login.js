const submitButton = document.getElementById("submit-button");
const emailLoginInput = document.getElementById("email-input");
const passwordLoginInput = document.getElementById("password-input");

async function getLoginResponse() {
    let response = await fetch('https://songs.code-star.ir/user/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: emailLoginInput.value, password: passwordLoginInput.value})
    });
    return response;
}

async function createInitialPlaylist(json) {
    await fetch('https://songs.code-star.ir/playlist/create', {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify({name: "favorites", token: json.token})});
}

function saveLoginData(json) {
    localStorage.setItem("is-logged-in", "true");
    localStorage.setItem("token", json.token);
}

async function login() {
    let response = await getLoginResponse();
    if (response.ok) {
        let json = await response.json();
        await createInitialPlaylist(json);
        saveLoginData(json);
        document.location = "index.html";
    } else {
        swal(genericErrorAlertDetails).then(() => {
        });
    }
}

if (submitButton != null) submitButton.onclick = () => login();
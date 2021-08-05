function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple");
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) ripple.remove();
    button.appendChild(circle);
}

async function logoutUser() {
    let response = await fetch('http://130.185.120.192:5000/user/logout', { method: 'POST' });
    localStorage.setItem("is-logged-in", "false");
    localStorage.setItem("token", "");
    document.location = "index.html";
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) button.onmousedown = ev => createRipple(ev);
const inputButtons = document.getElementsByTagName("input");
for (const button of inputButtons) {
    if (button.getAttribute("type") === "button" || button.getAttribute("type") === "submit") {
        button.onmousedown = ev => createRipple(ev);
    }
}

let favLink = document.getElementById("fav-link");
let loginLink = document.getElementById("login-link");
let registerLink = document.getElementById("register-link");
if (localStorage.getItem("is-logged-in") === "true") {
    loginLink.style.display = "none";
    registerLink.innerHTML = "خروج";
    registerLink.setAttribute("href", "#");
    registerLink.style.cursor = "pointer";
    registerLink.onclick = () => logoutUser();
} else {
    favLink.style.display = "none";
}

let checkbox = document.getElementById("toggle");

console.log(checkbox);

checkbox.addEventListener('change', function() {
    if (this.checked) {
        console.log("Checkbox is checked..");
    } else {
        console.log("Checkbox is not checked..");
    }
});
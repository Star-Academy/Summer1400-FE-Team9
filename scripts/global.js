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
    let response = await fetch('http://130.185.120.192:5000/user/logout', {method: 'POST'});
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

// toggle:

let checkbox = document.getElementById("toggle");

checkbox.addEventListener('change', function () {
    if (this.checked) {
        setMainTheme(1); // light
        setPageTheme(colors);
    } else {
        setMainTheme(0); // dark
        setPageTheme(colors);
    }
});

colors = {
    "primary": "",
    "secondary": "",
    "content_color": "",
    "text_color": "",
    "nav_color": "",
    "footer_color": "",
    "title_color": ""
}

primary_light = "#ff7e44";
secondary_light = "#3a3f55";
content_color_light = "wheat";
text_color_light = "#000000";
nav_color_light = "white";
footer_color_light = "white";
title_color_light = "whitesmoke";

primary_dark = "#3a3f55";
secondary_dark = "#ff7e44";
content_color_dark = "lightgray";
text_color_dark = "#000000";
nav_color_dark = "white";
footer_color_dark = "white";
title_color_dark = "whitesmoke";

function setMainTheme(theme) {
    if (theme === 1) {
        colors.primary = primary_light;
        colors.secondary = secondary_light;
        colors.content_color = content_color_light;
        colors.text_color = text_color_light;
        colors.nav_color = nav_color_light;
        colors.footer_color = footer_color_light;
        colors.title_color = title_color_light;
    } else {
        colors.primary = primary_dark;
        colors.secondary = secondary_dark;
        colors.content_color = content_color_dark;
        colors.text_color = text_color_dark;
        colors.nav_color = nav_color_dark;
        colors.footer_color = footer_color_dark;
        colors.title_color = title_color_dark;
    }
    document.getElementsByTagName("style")[0].innerHTML =
        "  body > header {\n" +
        "    background-color: " + colors.primary + ";\n" +
        "  }\n" +
        "\n" +
        "  #selected-tab, #main-selected-tab {\n" +
        "    color: " + colors.content_color + ";\n" +
        "  }\n" +
        "\n" +
        "  .more-buttons ul li:hover {\n" +
        "    background-color: " + colors.secondary + ";\n" +
        "  }\n" +
        "\n" +
        "  .hidden .hidden-text {\n" +
        "    color: " + colors.nav_color + ";\n" +
        "  }\n" +
        "\n" +
        "  body {\n" +
        "    color: " + colors.text_color + ";\n" +
        "    background-color: " + colors.primary + ";\n" +
        "  }\n" +
        "\n" +
        "  .logo h1 {\n" +
        "    color: " + colors.content_color + ";\n" +
        "  }\n" +
        "\n" +
        "  header .site-title {\n" +
        "    color: " + colors.text_color + ";\n" +
        "  }\n" +
        "  header ul li.primary-button {\n" +
        "    background-color: " + colors.secondary + ";\n" +
        "  }\n" +
        "  header ul li a {\n" +
        "    color: " + colors.nav_color + ";\n" +
        "  }\n" +
        "  header ul li:hover {\n" +
        "    background-color: " + colors.secondary + ";\n" +
        "  }\n" +
        "\n" +
        "  footer {\n" +
        "    color: " + colors.footer_color + ";\n" +
        "  }\n" +
        "}\n";
}
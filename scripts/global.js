const alertColor = "#ff7e44";

const genericErrorAlertDetails = { // TODO: Better failed messages (wrong data, connection,...)
    title: 'خطا',
    text: 'لطفا مجددا تلاش نمایید',
    type: 'error',
    confirmButtonColor: alertColor,
    confirmButtonText: 'بازگشت',
};

async function logoutUser() {
    await fetch('https://songs.code-star.ir/user/logout', {method: 'POST'});
    localStorage.setItem("is-logged-in", "false");
    localStorage.setItem("token", "");
    document.location = "index.html";
}

function setAuthenticationButtons() {
    let favLink = document.getElementById("fav-link");
    let loginLink = document.getElementsByClassName("login-link")[0];
    let registerLink = document.getElementById("register-link");
    if (localStorage.getItem("is-logged-in") === "true" && loginLink != null && registerLink != null) {
        loginLink.style.display = "none";
        registerLink.innerHTML = "خروج";
        registerLink.setAttribute("href", "#");
        registerLink.style.cursor = "pointer";
        registerLink.onclick = () => logoutUser();
    } else if (favLink != null) {
        favLink.style.display = "none";
    }
}

setAuthenticationButtons();

// toggle:
let checkbox = document.getElementById("toggle");

function checkBoxDidChange(checkbox) {
    setMainTheme(checkbox.checked ? 1 : 0);
    setPageTheme(colors);
}

if (checkbox != null) checkbox.addEventListener('change', () => checkBoxDidChange(checkbox));

let colors;
let colors_light = {"primary": "#ff7e44", "secondary": "#3a3f55", "content_color": "lightgray", "text_color": "#000000", "nav_color": "white", "header_color": "#3a3f55", "footer_color": "white", "title_color": "whitesmoke", "logo_path":"musix-light.png", "image_path":"music-light.png"};
let colors_dark = {"primary": "#3a3f55", "secondary": "#ff7e44", "content_color": "lightgray", "text_color": "#000000", "nav_color": "white", "header_color": "wheat", "footer_color": "white", "title_color": "whitesmoke", "logo_path":"musix-dark.png", "image_path":"music-dark.png"};

function setMainTheme(theme) {
    colors = (theme === 1) ? colors_light : colors_dark;
    document.getElementsByTagName("style")[0].innerHTML = "  body > header {\n" + "    background-color: " + colors.primary + ";\n" + "  }\n" +
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
        "\n" + "  body {\n" + "    color: " + colors.text_color + ";\n" + "    background-color: " + colors.primary + ";\n" +
        "  }\n" + "\n" +
        "  .logo img {\n" + "    content: url(\"images/"+colors.logo_path+"\");\n" +
        "  }\n" +
        "  .logo h1 {\n" +
        "    color: " + colors.header_color + ";\n" +
        "  }\n" +
        "  header img {\n" +
        "    content: url(\"images/"+colors.image_path+"\");\n" +
        "  }\n"+
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
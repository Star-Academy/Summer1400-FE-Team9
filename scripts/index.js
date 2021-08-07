let registerIndexLink = document.getElementById("register-index-link");
if (localStorage.getItem("is-logged-in") === "true") {
    registerIndexLink.innerHTML = "موزیک‌ها";
    registerIndexLink.setAttribute("href", "music-list.html");
} else {
    registerIndexLink.innerHTML = "ثبت‌نام";
    registerIndexLink.setAttribute("href", "login.html");
}

// toggle:

let checkbox = document.getElementById("toggle");

checkbox.addEventListener('change', function () {
    if (this.checked) {
        setMainTheme(1); // light
    } else {
        setMainTheme(0); // Dark
    }
});

let primary;
let secondary;
let content_color;
let text_color;
let nav_color;
let footer_color;
let title_color;

// MARK: Light Theme

primary_light = "#ff7e44";
secondary_light = "#3a3f55";
content_color_light = "wheat";
text_color_light = "#000000";
nav_color_light = "white";
footer_color_light = "white";
title_color_light = "whitesmoke";

// MARK: Dark Theme

primary_dark = "#3a3f55";
secondary_dark = "#ff7e44";
content_color_dark = "lightgray";
text_color_dark = "#000000";
nav_color_dark = "white";
footer_color_dark = "white";
title_color_dark = "whitesmoke";

function setMainTheme(theme) {
    if (theme === 1) {
        primary = primary_light;
        secondary = secondary_light;
        content_color = content_color_light;
        text_color = text_color_light;
        nav_color = nav_color_light;
        footer_color = footer_color_light;
        title_color = title_color_light;
    } else {
        primary = primary_dark;
        secondary = secondary_dark;
        content_color = content_color_dark;
        text_color = text_color_dark;
        nav_color = nav_color_dark;
        footer_color = footer_color_dark;
        title_color = title_color_dark;
    }
    document.getElementsByTagName("style")[0].innerHTML =
        "  body > header {\n" +
        "    background-color: " + primary + ";\n" +
        "  }\n" +
        "\n" +
        "  #selected-tab, #main-selected-tab {\n" +
        "    color: " + content_color + ";\n" +
        "  }\n" +
        "\n" +
        "  .more-buttons ul li:hover {\n" +
        "    background-color: " + secondary + ";\n" +
        "  }\n" +
        "\n" +
        "  .hidden .hidden-text {\n" +
        "    color: " + nav_color + ";\n" +
        "  }\n" +
        "\n" +
        "  body {\n" +
        "    color: " + text_color + ";\n" +
        "    background-color: " + primary + ";\n" +
        "  }\n" +
        "\n" +
        "  .logo h1 {\n" +
        "    color: " + content_color + ";\n" +
        "  }\n" +
        "\n" +
        "  header .site-title {\n" +
        "    color: " + text_color + ";\n" +
        "  }\n" +
        "  header ul li.primary-button {\n" +
        "    background-color: " + secondary + ";\n" +
        "  }\n" +
        "  header ul li a {\n" +
        "    color: " + nav_color + ";\n" +
        "  }\n" +
        "  header ul li:hover {\n" +
        "    background-color: " + secondary + ";\n" +
        "  }\n" +
        "\n" +
        "  footer {\n" +
        "    color: " + footer_color + ";\n" +
        "  }\n" +
        "}\n";
}
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

checkbox.addEventListener('change', function() {
    if (this.checked) {
        setLight();
    } else {
        setDark();
    }
});

// MARK: Light Theme

primary= "#ff7e44";
secondary= "#3a3f55";
content_color= "wheat";
text_color= "#000000";
nav_color= "white";
footer_color="white";
title_color= "whitesmoke";

// MARK: Dark Theme

primary_dark= "#3a3f55";
secondary_dark= "#ff7e44";
content_color_dark= "lightgray";
text_color_dark= "#000000";
nav_color_dark= "white";
footer_color_dark= "white";
title_color_dark= "whitesmoke";

function setLight(){
    document.getElementsByTagName("style")[0].innerHTML=
        "  body > header {\n" +
        "    background-color: "+primary+";\n" +
        "  }\n" +
        "\n" +
        "  #selected-tab, #main-selected-tab {\n" +
        "    color: "+content_color+";\n" +
        "  }\n" +
        "\n" +
        "  .more-buttons ul li:hover {\n" +
        "    background-color: "+secondary+";\n" +
        "  }\n" +
        "\n" +
        "  .hidden .hidden-text {\n" +
        "    color: "+nav_color+";\n" +
        "  }\n" +
        "\n" +
        "  body {\n" +
        "    color: "+text_color+";\n" +
        "    background-color: "+primary+";\n" +
        "  }\n" +
        "\n" +
        "  .logo h1 {\n" +
        "    color: "+content_color+";\n" +
        "  }\n" +
        "\n" +
        "  header .site-title {\n" +
        "    color: "+text_color+";\n" +
        "  }\n" +
        "  header ul li.primary-button {\n" +
        "    background-color: "+secondary+";\n" +
        "  }\n" +
        "  header ul li a {\n" +
        "    color: "+nav_color+";\n" +
        "  }\n" +
        "  header ul li:hover {\n" +
        "    background-color: "+secondary+";\n" +
        "  }\n" +
        "\n" +
        "  footer {\n" +
        "    color: "+footer_color+";\n" +
        "  }\n" +
        "}\n";
}

function setDark(){
    document.getElementsByTagName("style")[0].innerHTML=
        "  body > header {\n" +
        "    background-color: "+primary_dark+";\n" +
        "  }\n" +
        "\n" +
        "  #selected-tab, #main-selected-tab {\n" +
        "    color: "+content_color_dark+";\n" +
        "  }\n" +
        "\n" +
        "  .more-buttons ul li:hover {\n" +
        "    background-color: "+secondary_dark+";\n" +
        "  }\n" +
        "\n" +
        "  .hidden .hidden-text {\n" +
        "    color: "+nav_color_dark+";\n" +
        "  }\n" +
        "\n" +
        "  body {\n" +
        "    color: "+text_color_dark+";\n" +
        "    background-color: "+primary_dark+";\n" +
        "  }\n" +
        "\n" +
        "  .logo h1 {\n" +
        "    color: "+content_color_dark+";\n" +
        "  }\n" +
        "\n" +
        "  header .site-title {\n" +
        "    color: "+text_color_dark+";\n" +
        "  }\n" +
        "  header ul li.primary-button {\n" +
        "    background-color: "+secondary_dark+";\n" +
        "  }\n" +
        "  header ul li a {\n" +
        "    color: "+nav_color_dark+";\n" +
        "  }\n" +
        "  header ul li:hover {\n" +
        "    background-color: "+secondary_dark+";\n" +
        "  }\n" +
        "\n" +
        "  footer {\n" +
        "    color: "+footer_color_dark+";\n" +
        "  }\n" +
        "}\n";
}
let registerIndexLink = document.getElementById("register-index-link");

function setTitleOfMainIndexButton(registerIndexLink) {
    if (localStorage.getItem("is-logged-in") === "true") {
        registerIndexLink.innerHTML = "موزیک‌ها";
        registerIndexLink.setAttribute("href", "music-list.html");
    } else {
        registerIndexLink.innerHTML = "ثبت‌نام";
        registerIndexLink.setAttribute("href", "login.html");
    }
}

if (registerIndexLink != null) setTitleOfMainIndexButton(registerIndexLink);

function setIndexPageTheme(colors) {
    document.getElementsByTagName("style")[0].innerHTML +=
        "article {\n" +
        "    background-color: " + colors.content_color + ";\n" +
        "  }\n" + "  article header a {\n" +
        "    background-color: " + colors.primary + ";\n" +
        "  }";
    console.log("I'm here");
    return "I'm here";
}
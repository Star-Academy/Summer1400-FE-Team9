let registerIndexLink = document.getElementById("register-index-link");
if (localStorage.getItem("is-logged-in") === "true") {
    registerIndexLink.innerHTML = "موزیک‌ها";
    registerIndexLink.setAttribute("href", "music-list.html");
} else {
    registerIndexLink.innerHTML = "ثبت‌نام";
    registerIndexLink.setAttribute("href", "login.html");
}

function setPageTheme(colors) {
    document.getElementsByTagName("style")[0].innerHTML +=
        "article {\n" +
        "    background-color: " + colors.text_color + ";\n" +
        "  }\n" +
        "  article header a {\n" +
        "    background-color: " + colors.primary + ";\n" +
        "  }"
    console.log("I'm here in setPageTheme method");
}
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
        console.log("Checkbox is checked..");
    } else {
        console.log("Checkbox is not checked..");
    }
});
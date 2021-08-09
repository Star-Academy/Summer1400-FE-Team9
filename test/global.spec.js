describe("Setting authentication buttons when not logged in", function() {
    it("Should hide favorites link",function() {
        let favLink = document.createElement("li");
        favLink.setAttribute("id", "fav-link");
        document.body.appendChild(favLink);
        localStorage.setItem("is-logged-in", "false");
        setAuthenticationButtons();

        expect(favLink.style.display).toEqual("none");

        document.body.removeChild(favLink);
    });
});

describe("Setting authentication buttons when logged in", function() {
    it("Should alter login and register links",function() {
        let registerLink = document.createElement("li");
        registerLink.setAttribute("id", "register-link");
        document.body.appendChild(registerLink);
        let loginLink = document.createElement("li");
        loginLink.setAttribute("class", "login-link");
        let a = document.createElement("a");
        loginLink.appendChild(a);
        document.body.appendChild(loginLink);
        localStorage.setItem("is-logged-in", "true");
        setAuthenticationButtons();
        localStorage.setItem("is-logged-in", "false");
        expect(loginLink.style.display).toEqual("none");
        expect(registerLink.innerHTML).toEqual("خروج");
        expect(registerLink.style.cursor).toEqual("pointer");

        document.body.removeChild(loginLink);
        document.body.removeChild(registerLink);
    });
});

describe("Testing global.js", function() {
    it("Should reflect changes in check box to light mode", function() {
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("id", "toggle");
        checkbox.setAttribute("checked", "true")
        document.body.appendChild(checkbox);
        let styleTag = document.createElement("style");
        document.body.appendChild(styleTag);
        checkBoxDidChange(checkbox);

        expect(colors).toEqual(colors_light);

        document.body.removeChild(checkbox);
        document.body.removeChild(styleTag);
    });
});

describe("Testing index.js", function() {
    it("Should set title of the main index button correctly", function() {
        let registerIndexLink = document.createElement("a");
        document.body.appendChild(registerIndexLink);

        localStorage.setItem("is-logged-in", "true")
        setTitleOfMainIndexButton(registerIndexLink);
        expect(registerIndexLink.innerHTML).toEqual("موزیک‌ها");

        localStorage.setItem("is-logged-in", "false")
        setTitleOfMainIndexButton(registerIndexLink);
        expect(registerIndexLink.innerHTML).toEqual("ثبت‌نام");

        document.body.removeChild(registerIndexLink);
    });

    it("Should set page theme correctly", function() {
        let styleTag = document.createElement("style");
        document.body.appendChild(styleTag);

        let result = setPageTheme(colors_light);
        expect(result).toEqual("I'm here")
        document.body.removeChild(styleTag);
    });
});

describe("Testing login.js", function() {
    it("Should save login data", function() {
        let json = {token: "my-token"};
        saveLoginData(json);
        expect(localStorage.getItem("is-logged-in")).toEqual("true");
        expect(localStorage.getItem("token")).toEqual("my-token");
        localStorage.setItem("is-logged-in", "false");
    });
});
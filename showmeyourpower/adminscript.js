document.addEventListener("DOMContentLoaded", () => {

    const pic = document.getElementById("adminMainPic");
    const link = document.getElementById("link");
    const form = document.getElementById("loginForm");
    const confirmButton = document.getElementById("entryButton");
    const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");

    const checkAdmin = async () => {
        const login = loginInput.value.trim();
        const password = passwordInput.value.trim();
        const url = "../API/index.php?func=1&login=" + login + "&password=" + password;
        const result = await fetch(url);
        const json = await result.json();
        console.log(json);
    };

    pic.addEventListener("mouseover", () => {
        link.classList.add('display');
    });

    pic.addEventListener("mouseout", () => {
        link.classList.remove('display');
    });

    link.addEventListener("click", () => {
        pic.classList.add("displayNone");
        form.classList.add("display")
    })
    confirmButton.addEventListener("click", () => {
        if (verifyForm()) {
            checkAdmin();
        };
    })
    const verifyForm = () => {
        if (!loginInput.value && !loginInput.value.trim()) {
            loginInput.classList.add("errorBorder")
            alert("Введите логин");
            return false;
        } else if (!passwordInput.value && !passwordInput.value.trim()) {
            passwordInput.classList.add("errorBorder")
            alert("Введите логин");
            return false;
        } else return true;
    }
});
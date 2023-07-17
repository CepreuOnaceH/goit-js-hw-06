const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", formLogin);
function formLogin(e) {
    e.preventDefault();
    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;
    if (emailInput.value === "" || passwordInput.value === "") {
        alert("ПОЧЕМУ ТЫ НЕ ЗАПОЛНИЛ ВСЕ ПОЛЯ???");
    } else {
        const loginData = {
            email: emailInput.value,
            password: passwordInput.value,
        }
        console.log(loginData);
        loginForm.reset();
    }
}
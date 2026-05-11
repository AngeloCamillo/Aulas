const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", e => {
        e.preventDefault();
        const user = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };
        localStorage.setItem("user", JSON.stringify(user));
        document.getElementById("message").innerText = "Cadastro Realizado!";
    });
}
const loginForm = document.getElementById
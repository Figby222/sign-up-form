const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordError = document.querySelector(".password-error")

function checkPassword(){
    if (password.value === confirmPassword.value) {
        passwordError.style.display = "none";
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        password.setCustomValidity("");
    } else {
        passwordError.style.display = "inline";
        password.classList.add("error");
        confirmPassword.classList.add("error");
        password.setCustomValidity("Passwords must match");
    }
}

password.addEventListener("input", checkPassword);
confirmPassword.addEventListener("input", checkPassword);
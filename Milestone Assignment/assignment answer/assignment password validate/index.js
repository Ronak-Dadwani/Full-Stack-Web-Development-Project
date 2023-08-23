function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error");
    if (email.indexOf("@") === -1 || password.length < 8) {
        error.innerHTML = "Invalid email or password!";
        error.style.color = "red";
        return false;
    } else {
        error.innerHTML = "Valid email and password!";
        error.style.color = "green";
        return true;
    }
}
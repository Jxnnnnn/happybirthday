// Predefined login credentials
const validUsername = "Aira";
const validPassword = "08-31-21";

// Login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === validUsername && password === validPassword) {
        // Hide login form and show the birthday card
        document.getElementById("login-container").style.display = "none";
        document.getElementById("birthdayCard").style.display = "block";
    } else {
        // Display error message for incorrect login
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
}

// Toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    const toggleIcon = document.getElementById("togglePassword");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    }
}

// Attach event listener to the toggle button
document.getElementById("togglePassword").addEventListener("click", togglePassword);

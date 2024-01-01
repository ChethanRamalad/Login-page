// Function to open the login popup
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Function to close the login popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Function to handle login
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberme").checked;

    // Add your authentication logic here (replace this with secure authentication)
    if (username === "your_username" && password === "your_password") {
        alert("Login successful");

        // Redirect to the homepage
        window.location.replace("file:///C:/Users/Chaitra/Desktop/Project/Login%20page/HP.html");

        // Save the credentials in the browser's local storage if the remember me checkbox is checked
        if (rememberMe) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }

        // Close the popup after successful login
        closePopup();
    } else {
        alert("Login unsuccessful");
    }
}

// Function to load saved credentials and pre-fill the login form
function loadSavedCredentials() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        document.getElementById("username").value = savedUsername;
        document.getElementById("password").value = savedPassword;
        document.getElementById("rememberme").checked = true;
    }
}

// Call the loadSavedCredentials function when the page loads
window.onload = loadSavedCredentials;
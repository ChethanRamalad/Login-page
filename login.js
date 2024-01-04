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
    // const rememberMe = document.getElementById("rememberme").checked;
    // Add your authentication logic here (replace this with secure authentication)
    if (username === "q" && password === "q")
    {
        window.location.href = "file:///C:/Users/Chaitra/Desktop/Project/Login%20page/HP.html"
        console.log("print")
        closePopup();
    }
    else{ 
        alert("Login unsuccessful");
    }

    // if (username === "q" && password === "q") {
        // window.location.href = "file:///C:/Users/Chaitra/Desktop/Project/Login%20page/HP.html"

    // } else {
        // alert("Login unsuccessful");
    // }
}

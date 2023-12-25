function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function login() {
    const jsonObj = {
        username: "q",
        password: "q"
    }

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
console.log(username,password)
    if (username === jsonObj.username && password === jsonObj.password) {
        alert("Login successful");
        // You can also redirect the user to another page or perform other actions for successful login.
    } else {
        alert("Login unsuccessful");
    }
        // event.preventDefault();
}
const rmCheck = document.getElementById("remmberme");
const usernameInput = document.getElementById("username");

// Check if the checkbox is checked
if (usernameInput.checked) {
  // Get the email address from the input element
  const username = usernameInput.value;

  // Store the email address in local storage
  localStorage.setItem("username", username);
} else {
  // Remove the email address from local storage
  localStorage.removeItem("username");
}

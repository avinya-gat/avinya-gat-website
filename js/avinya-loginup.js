// Function to validate login form
function validateLoginForm() {
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    
    if (username.trim() === "") {
        alert("Please enter your username.");
        return false;
    }
    if (password.trim() === "") {
        alert("Please enter your password.");
        return false;
    }
    return true;
}

// Function to display contact modal for sign up
document.getElementById("showSignUp").addEventListener("click", function() {
    var modal = document.getElementById("contact-modal");
    modal.style.display = "block";
});

// Close the modal when the user clicks anywhere outside of it
window.addEventListener("click", function(event) {
    var modal = document.getElementById("contact-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

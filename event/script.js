function validateLoginForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password.');
        return false;
    }

    // Additional validation logic can be added if needed

    return true;
}

function validateSignupForm() {
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmpassword').value;

    if (firstname.trim() === '' || lastname.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Please fill in all fields.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // Additional validation logic can be added if needed

    return true;
}

function togglePassword() {
    let password = document.getElementById('passw');
    let checkbox = document.getElementById('checkbox');
    if (checkbox.checked) {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}
function signup() {
    var username = document.getElementById("nameSign").value;
    var email = document.getElementById("emailSign").value;
    var password = document.getElementById("passwordSign").value;
    var passwordAgain = document.getElementById("again-passw").value;

    var alertBox = document.getElementById("alert-box");
    var alertMessage = document.getElementById("alert-message");

    if (username.trim() === "") {
        alertMessage.innerText = "Vui lòng nhập tên của bạn";
        alertMessage.style.color = "red";
        return;
    }
    if (email.trim() === "") {
        alertMessage.innerText = "Email không được để trống";
        alertMessage.style.color = "red";
        return;
    }
    // Kiểm tra tính hợp lệ của email và mật khẩu
    if (!validateEmail(email)) {
        alertMessage.innerText = "Email không hợp lệ";
        return;
    }
    if (checkAccountExists(email)) {
        // alert("Tên email bị trùng vui lòng đặt email khác")
        alertMessage.innerText("Email đã được đăng ký . Vui lòng chọn email khác");
        alertMessage.style.color = "red";
        return;
    }
    if (password.trim() === "") {
        alertMessage.innerText = "Mật khẩu không được để trống";
        alertMessage.style.color = "red";
        return;
    }
    if (!validatePassword(password)) {
        alertMessage.innerText = "Mật khẩu không hợp lệ";
        return;
    }
    if (passwordAgain.trim() === "") {
        alertMessage.innerText = "Vui lòng xác nhận mật khẩu";
        return;
    }
    if (password !== passwordAgain) {
        alertMessage.innerText = "Mật khẩu nhập lại không khớp";
        return;
    }
    var userLogin = {
        username: username,
        email: email,
        password: password,
        passwordAgain: passwordAgain,
    };
    var json = JSON.stringify(userLogin);
    localStorage.setItem("userinfo", json);
    localStorage.setItem("name", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("passwordAgain", passwordAgain);
    alert("Đăng ký thành công");

    document.getElementById("modal-dangky-btn").style.display = "none";
    document.getElementById("modal").style.display = "block";
}

function login() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("passw").value;
    // Kiểm tra tính hợp lệ của email và mật khẩu
    if (email.trim() === "" || password.trim() === "") {
        alert("Vui lòng nhập email hoặc password");
        return;
    }
    if (!validateEmail(email)) {
        alert("Email không hợp lệ");
        return;
    }
    if (!validatePassword(password)) {
        alert("Mật khẩu không hợp lệ");
        return;
    }
    // Lấy dữ liệu người dùng đã đăng ký từ localStorage
    var userLogin = localStorage.getItem("email");
    var userPassword = localStorage.getItem("password");
    // Kiểm tra xem người dùng đã đăng ký hay chưa
    if (userLogin !== email) {
        alert("Email không đúng hoặc chưa đăng ký tài khoản");
        return;
    }
    // Kiểm tra mật khẩu có đúng không
    if (userPassword !== password) {
        alert("Sai mật khẩu");
        return;
    }
    window.location.href = "Accout.html";
    alert("Đăng nhập thành công");
}
// document.logAcc.addEventListener("click", function() {
//     if ((formAcc.style.display = "none")) {
//         formAcc.style.display = "block";
//     } else {
//         formAcc.style.display = "none";
//     }
// });

function showFormAcc() {
    let formAcc = document.getElementById("form-accout");
    if (formAcc.style.display === "none") {
        formAcc.style.display = "block";
    } else {
        formAcc.style.display = "none";
    }
}

function checkAccountExists(email) {
    var userInfo = localStorage.getItem("userinfo");
    if (userInfo) {
        var userObj = localStorage.getItem(userInfo);
        if (userObj.email === email) {
            return true;
        }
    }
    return false;
}
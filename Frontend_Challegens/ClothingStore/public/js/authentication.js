function isLogged() {
  // lấy dữ liệu từ local storage bao gồm: username & password.
  // so sánh dữ liệu đó với danh sách users đang có, nếu chúng tồn tại thì trả về true, ngược lại trả về false
  return true;
}

function handleLogin(email, password) {
  let flag = false;
  for (let i = 0; i < users.length; i++) {
    if (email === users[i].username && password === users[i].password);
  }
  // kiểm tra cặp thông tin username + password có đồng thời tồn tại trong danh sách users hiện tại hay không, nếu có trả về true, nếu không thì trả về false.
  // nếu kết quả là true, thì lưu thông tin username + password vào localstorage
  // Gợi ý: key: token; value: [username] + [password]
  return true;
}

function handleLogout() {
  // Xóa toàn bộ thông tin của user ở localStorage. Chuyển hướng user về trang chủ
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validatePassword(password) {
  // Kiểm tra độ dài mật khẩu phải lớn hơn hoặc bằng 8 ký tự
  if (password.length < 8) {
    alert("Độ dài mật khẩu phải lớn hơn hoặc bằng 8");
    return false;
  }

  // Kiểm tra mật khẩu phải chứa ít nhất một chữ cái viết hoa
  if (!/[A-Z]/.test(password)) {
    alert("Mật khẩu phải có ít nhất 1 chữ cái viết hoa");

    return false;
  }

  // Kiểm tra mật khẩu phải chứa ít nhất một chữ cái viết thường
  if (!/[a-z]/.test(password)) {
    alert("Mật khẩu phải có ít nhất 1 chữ cái viết thường");
    return false;
  }

  // Kiểm tra mật khẩu phải chứa ít nhất một số
  if (!/\d/.test(password)) {
    alert("Mật khẩu phải có ít nhất 1 số");
    return false;
  }

  return true;
}
function checkAccountExists(email) {
  var json = localStorage.getItem("userinfo");
  if (json !== null) {
    var userLogin = JSON.parse(json);
    if (userLogin.email === email) {
      return true;
    }
  }
  return false;
}

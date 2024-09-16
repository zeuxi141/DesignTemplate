// Lắng nghe sự kiện submit form đăng ký
const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Ngăn chặn việc reload trang khi submit form

  // Lấy giá trị từ input
  const username = document.getElementById("emailSign").value;
  const password = document.getElementById("passwordSign").value;
  const confirmPassword = document.getElementById("again-passw").value;
  const fullname = document.getElementById("nameSign").value;
  // Gửi yêu cầu đăng ký đến backend
  // Thay thế URL_BACKEND bằng địa chỉ backend của bạn

  var alertBox = document.getElementById("alert-box");
  var alertMessage = document.getElementById("alert-message");


  if(fullname === ""){
    alertMessage.innerText = "Họ tên không được để trống";
    alertMessage.style.color = "red";
    return;
  }

  if(username === ""){
    alertMessage.innerText = "Email đăng nhập không được để trống";
    alertMessage.style.color = "red";
    return;
  }

  if(password.length === 0){
    alertMessage.innerText = "Mật khẩu đăng nhập không được để trống";
    alertMessage.style.color = "red";
    return;
  }

  // Kiểm tra mật khẩu
  if (password.length < 8 || !/[A-Z]/.test(password)) {
    alertMessage.innerText="Mật khẩu phải có ít nhất 8 ký tự và chứa ít nhất 1 chữ in hoa";
    alertMessage.style.color ="red";
    return;
  }


  // Kiểm tra mật khẩu xác nhận
  if (password !== confirmPassword) {
    alertMessage.innerText = "Mật khẩu xác nhận không khớp";
    alertMessage.style.color = "red";
    return;
  }

  // Kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@gmail\.com$/i;
  if (!emailRegex.test(username)) {
    alertMessage.innerText = "Email không đúng định dạng";
    alertMessage.style.color = "red";
    return;
  }

  fetch("https://lavent-clone.vercel.app/api/v1/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password, fullname })
  })
  .then(response => response.json())
  .then(data => {
    // Xử lý kết quả trả về từ backend
    console.log(data); // In ra kết quả từ backend 
  })
  .catch(error => {
    console.error("Đã xảy ra lỗi:", error);
  });
  alert("Đăng ký thành công");
  document.getElementById("modal-dangky-btn").style.display = "none";
  document.getElementById("modal").style.display = "block";
});




// Hàm kiểm tra đăng nhập
function login(username, password) {
  // Tạo request body chứa thông tin đăng nhập
  const requestBody = {
    username: username,
    password: password
  };

  // Gửi request POST đến backend để kiểm tra đăng nhập
  fetch('https://lavent-clone.vercel.app/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
  .then(response => response.json())
  .then(data => {
    // Xử lý phản hồi từ backend
    if (data.success) {
      // Đăng nhập thành công, thực hiện các tác vụ sau đăng nhập
      console.log('Đăng nhập thành công');
      // ...
    } else {
      if (data.error === 'username_not_found') {
        alert('Username chưa được đăng ký.');
      } else if (data.error === 'invalid_password') {
        alert('Sai mật khẩu.');
      }
      // Đăng nhập không thành công, hiển thị thông báo lỗi
      console.log('Đăng nhập không thành công: ' + data.message);
      // ...
    }
  })
  .catch(error => {
    // Xử lý lỗi nếu có
    console.error('Lỗi khi thực hiện đăng nhập:', error);
    // ...
  });

}

// Xử lý sự kiện khi người dùng click nút Đăng nhập
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Lấy giá trị username và password từ input fields
  const username = document.getElementById('loginEmail').value;
  const password = document.getElementById('passw').value;

  // Gọi hàm đăng nhập
  login(username, password);
  
});



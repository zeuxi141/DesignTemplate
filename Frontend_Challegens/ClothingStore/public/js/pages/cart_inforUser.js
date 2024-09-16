// const nameInput = document.getElementById('fullnameInput');
// const emailInput = document.getElementById('emailInput');
// const phoneInput = document.getElementById('phonenumberInput');
// const dobInput = document.getElementById('dobInput');
// const addrInput = document.getElementById('addrInput')

// nameInput.value = data_user[0].fullname;
// emailInput.value = data_user[0].email;
// phoneInput.value = data_user[0].phonenumber;
// dobInput.value = data_user[0].DOB;
// addrInput.value = data_user[0].addr;


// Tạo payload để gửi lên máy chủ
const payload = {
    username: 'hello',
    password: '1'
  };
  
  // Gửi yêu cầu POST để đăng nhập
  fetch('https://lavent-clone.vercel.app/api/v1/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
    .then(response => response.json())
    .then(data => {
      // Kiểm tra nếu có dữ liệu người dùng
      if (data) {
        // Lấy thông tin họ tên, username, password và email
        const fullname = data.fullname;
        const username = data.username;
        const password = data.password;
        const dob = data.dob;
  
        // Xuất thông tin người dùng vào các thẻ <p>
        document.getElementById('fullnameInput').value = fullname;
        document.getElementById('emailInput').value = username;
        document.getElementById('dobInput').value = dob;
      } else {
        console.log('Đăng nhập không thành công');
      }
    })
    .catch(error => {
      console.error('Lỗi:', error);
    });

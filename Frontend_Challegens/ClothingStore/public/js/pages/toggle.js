const btnA = document.getElementById("btn-show-form");
const btnB = document.getElementById("toggle-voucher-btn");
const btnC = document.getElementById("btn-wish-list");
const boxA = document.getElementById("inforUser");
const boxB = document.getElementById("voucher-list");
const boxC = document.getElementById("favorite-products");

btnA.addEventListener("click", () => {
  boxA.style.display = "block";
  boxB.style.display = "none";
  boxC.style.display = "none";
});

btnB.addEventListener("click", () => {
  boxA.style.display = "none";
  boxB.style.display = "block";
  boxC.style.display = "none";
});


btnC.addEventListener("click", () => {
    boxA.style.display = "none";
    boxB.style.display = "none";
    boxC.style.display = "block";
});

function DangXuat() {
    // Xóa thông tin đăng nhập
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    // Đổi trang web
    window.location.href = "index.html";
    // Hiển thị thông báo đăng xuất thành công
    var logoutMessage = document.createElement("div");
    logoutMessage.innerText = "Bạn đã đăng xuất thành công!";
    logoutMessage.classList.add("logout-message");
    document.body.appendChild(logoutMessage);
    // Ẩn thông báo sau 3 giây
    setTimeout(function() {
        logoutMessage.style.display = "none";
    }, 3000);
}

const addVoucherBtn = document.getElementById("add-voucher-btn");
const voucherList = document.querySelector(".voucher-list ul");
addVoucherBtn.addEventListener("click", function() {
    const newVoucherInput = document.getElementById("new-voucher-input");
    const newVoucherName = newVoucherInput.value.trim();
    // Kiểm tra giá trị nhập vào có hợp lệ không
    if (newVoucherName.length === 0) {
        alert("Vui lòng nhập tên Voucher");
        return;
    }
    // Tạo phần tử mới và thêm vào cuối danh sách
    const newVoucher = document.createElement("li");
    newVoucher.textContent = newVoucherName;
    voucherList.appendChild(newVoucher);
    // Hiển thị thông báo thành công và reset giá trị trong ô input
    alert("Thêm Voucher thành công");
    newVoucherInput.value = "";
});
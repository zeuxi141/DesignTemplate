const UserInfo = JSON.parse(localStorage.getItem("userinfo"));
// console.log({ UserInfo });
// if(UserInfo){
//   document.getElementById('AccForMy').innerText='Tài khoản của tôi';
//   const userlogin=document.getElementById('formLogin');
//   userlogin.addEventListener('click',function(){

//   })
// }else{
//   document.getElementById('AccForMy').innerText='Mua ngay';
// }
// if(!UserInfo){
//   window.location.href='index.html'
// }
// TẢI AVT LÊN FORM THÔNG TIN
let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");
let upload = document.getElementById("upload");
inputFile.onchange = function() {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
    let reader = new FileReader();
    reader.onload = function(e) {
        // Lưu ảnh vào localStorage với key là "avatar"
        localStorage.setItem("avatar", e.target.result);
        profilePic.src = e.target.result;
    };
    reader.readAsDataURL(file);
};
// START:ẨN/HIỆN THÔNG TIN CÁ NHÂN
function toggleForm() {
    var form = document.querySelector(".form-ttcn");
    form.style.display = form.style.display === "none" ? "block" : "none";
}
// END:ẨN/HIỆN THÔNG TIN CÁ NHÂN
// START:ẨN/HIỆN ĐƠN HÀNG
function showOrderForm() {
    var formDonHang = document.querySelector(".form-donhang");
    formDonHang.style.display = formDonHang.style.display === "none" ? "block" : "none";
}
// END:ẨN/HIỆN ĐƠN HÀNG
//START:: VOUCHER
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
const formVoucher = document.getElementById("voucher-list");
const btnVouhcer = document.getElementById("toggle-voucher-btn");

function voucherForm() {
    if (formVoucher.style.display === "none") {
        formVoucher.style.display = "block";
    } else {
        formVoucher.style.display = "none";
    }
}
btnVouhcer.addEventListener("click", voucherForm());
// END::VOUCHER

// START::ĐĂNG XUẤT
const LogOut1 = document.getElementById("logout-1");
LogOut1.addEventListener("click", logout);

// HIỂN THỊ THÔNG TIN
function showInfo() {
    const infoContainer = document.getElementById("info-container");
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    const btnViewInfo = document.getElementById("btn-view-info");
    const btnHideInfo = document.getElementById("btn-hide-info");
    console.log({ UserInfo });
    if (userInfo) {
        infoContainer.innerHTML = `
      <p>Tên: ${userInfo.username}</p>
      <br>
      <p>Email: ${userInfo.email}</p>
      <br>
      <p>Password: ${userInfo.password}</p>
      <br>
    `;
        btnViewInfo.style.display = "none";
        btnHideInfo.style.display = "block";
    } else {
        infoContainer.innerHTML = "Không tìm thấy thông tin!";
    }
}

function hideInfo() {
    const infoContainer = document.getElementById("info-container");
    const btnViewInfo = document.getElementById("btn-view-info");
    const btnHideInfo = document.getElementById("btn-hide-info");

    // Ẩn thông tin và hiển thị nút "Xem thông tin"
    infoContainer.innerHTML = "";
    btnHideInfo.style.display = "none";
    btnViewInfo.style.display = "block";
}

function showFavoriteProducts() {
    var favoriteProducts = document.getElementById("favorite-products");
    if (favoriteProducts.style.display === "none") {
        favoriteProducts.style.display = "block";
    } else {
        favoriteProducts.style.display = "none";
    }
}
// ==============================================
// Lấy tất cả các nút "Thêm vào giỏ"
const buyBtns = document.querySelectorAll(".buy-btn");

// Lặp qua từng nút "Thêm vào giỏ" và thêm sự kiện click cho chúng
buyBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        // Lấy mã sản phẩm từ thuộc tính data-product của nút "Thêm vào giỏ"
        const productId = event.target.getAttribute("data-product");

        // Lấy thông tin sản phẩm từ phần tử li chứa nút "Thêm vào giỏ" tương ứng
        const product = document.querySelector(
            `.product-item[data-product="${productId}"]`
        );
        const productName = product.querySelector(".product-name").textContent;
        const productSize = product.querySelector('select[name="size"]').value;
        const productQuantity = product.querySelector(
            'input[name="quantity"]'
        ).value;
        const productPrice = product
            .querySelector(".product-price")
            .textContent.split(":")[1]
            .trim();

        // Tạo một đối tượng sản phẩm mới
        const newProduct = {
            id: productId,
            name: productName,
            size: productSize,
            quantity: productQuantity,
            price: productPrice,
        };

        // Lưu sản phẩm mới vào giỏ hàng
        addToCart(newProduct);

        // Hiển thị thông báo thêm sản phẩm vào giỏ hàng thành công
        alert(`Đã thêm "${productName}" vào giỏ hàng`);
    });
});

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Kiểm tra sản phẩm đã có trong giỏ hàng chưa
    let existingProductIndex = cart.findIndex(
        (item) => item.id === product.id && item.size === product.size
    );

    if (existingProductIndex !== -1) {
        // Nếu sản phẩm đã có trong giỏ hàng thì cộng thêm số lượng mới vào sản phẩm đó
        cart[existingProductIndex].quantity += parseInt(product.quantity);
    } else {
        // Nếu sản phẩm chưa có trong giỏ hàng thì thêm sản phẩm mới vào giỏ hàng
        cart.push({
            id: product.id,
            name: product.name,
            size: product.size,
            quantity: parseInt(product.quantity),
            price: parseFloat(product.price.replace(",", "")),
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}
// Lấy danh sách các nút "Thêm vào giỏ hàng"
var addToCartButtons = document.querySelectorAll(".add");

// Lắng nghe sự kiện click của các nút đó
for (var i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", function() {
        // Lấy thông tin sản phẩm
        var productName = this.getAttribute("data-name");
        var productPrice = this.getAttribute("data-price");
        var productQuantity = this.previousElementSibling.value;

        // Tạo object sản phẩm
        var product = {
            name: productName,
            price: productPrice,
            quantity: productQuantity,
        };

        // Lưu sản phẩm vào giỏ hàng
        addToCart(product);
    });
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(product) {
    // Kiểm tra nếu giỏ hàng rỗng thì hiển thị thông báo
    var cartList = document.querySelector(".listcart");
    if (cartList.innerHTML === "") {
        var emptyCartMessage = document.createElement("div");
        emptyCartMessage.innerHTML = "<p>Giỏ hàng rỗng</p>";
        cartList.appendChild(emptyCartMessage);
    }

    // Tạo HTML cho sản phẩm
    var productHTML =
        '<div class="itemcart"><p class="productname">' +
        product.name +
        '</p><p class="productprice">' +
        product.price +
        '</p><p class="productquantity">' +
        product.quantity +
        "</p></div>";

    // Thêm sản phẩm vào giỏ hàng
    var cartItem = document.createElement("div");
    cartItem.innerHTML = productHTML;
    cartList.appendChild(cartItem);
}
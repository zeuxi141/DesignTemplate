let cartIcon = document.querySelector('#iconCart');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
let bodyElement = document.querySelector('body');
let addToCartElement = document.getElementsByClassName('btn-muahang add')[0];


if(window.location.pathname.includes("ProductDetail.html")){
	cart.style.display = 'block';
// 	updateTotal();
	getCartFromStorage();
	updateTotal();
}

// addToCartElement.onclick = () =>{
// 	cart.style.display = 'block';
// 	// cart.style.zIndex = '2';
// 	// bodyElement.classList.add('active');
// 	updateTotal();
// }

// show cart
cartIcon.onclick = () => {
	cart.style.display = 'block';
	
	getCartFromStorage();
	updateTotal();
};
//close u cart
closeCart.onclick = () => {
	cart.style.display = 'none';
};

// cart working js
if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready);
} else {
	ready();
}


//bat thong tin su kien
function ready() {
	//remove item from cart
	var removeCartButtons = document.getElementsByClassName('cart-remove');
	for (var i = 0; i < removeCartButtons.length; i++) {
		var button = removeCartButtons[i];
		button.addEventListener('click', removeCartItem);
	}
	//quantity change
	var quantityinputs = document.getElementsByClassName('cart-quantity');
	for (var i = 0; i < quantityinputs.length; i++) {
		var input = quantityinputs[i];
		input.addEventListener('change', quantityChanged);
	}
	// add to cart
	var addCart = document.getElementsByClassName('btn-muahang add');
	for (var i = 0; i < addCart.length; i++) {
		var button = addCart[i];
		button.addEventListener('click', addCartClicked);
	}
	// buy button work
	document
		.getElementsByClassName('btn-buy')[0]
		.addEventListener('click', buyButtonClicked);
}

// remove items from cart
function removeCartItem(event) {
	var buttonClicked = event.target;
	buttonClicked.parentElement.remove();
	updateTotal();
	updateCartInStorage();
}


// quantity change
function quantityChanged(event) {
	console.log(event);
	var input = event.target;
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1;
	}
	updateTotal();
	updateCartInStorage();
}

//phan cach so 0 bang dau ","
function ReplaceNumberWithCommas(yourNumber) {
	//Seperates the components of the number
	var n = yourNumber.toString().split('.');
	//Comma-fies the first part
	n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	//Combines the two sections
	return n.join('.');
}


//update total
function updateTotal() {
	var cartContent = document.getElementsByClassName('cart-content')[0];
	var cartBoxes = cartContent.getElementsByClassName('cart-box');
	var total = 0;
	for (var i = 0; i < cartBoxes.length; i++) {
		var cartBox = cartBoxes[i];
		var priceElement = cartBox.getElementsByClassName('cart-price')[0];
		var quantityElement =
			cartBox.getElementsByClassName('cart-quantity')[0];
		var price = parseFloat(priceElement.innerText.replace('vnd', ''));
		var quantity = quantityElement.value;
		total = total + price * quantity;
	}
	total = Math.round(total * 100) / 100;
	total = ReplaceNumberWithCommas(total);

	document.getElementsByClassName('total-price')[0].innerText =
		total + ',000' + ' vnd';
}



//add to cart
function addCartClicked() {
	//lay id va lưu
    var title = document.getElementsByClassName('summary__title')[0].innerHTML;
	var productImg = document.getElementsByClassName('productImg')[0].src;
	var price = document.getElementsByClassName('summary__price')[0].innerHTML;
	var quantity = document.getElementsByClassName('amount')[0].value;
	console.log
	addProductToCart(title, price, productImg, quantity);
	alert("Thêm thành công!");
	updateTotal();
	updateCartInStorage();
}

//add product to cart
function addProductToCart(title, price, productImg, quantity) {
	var cartShopBox = document.createElement('div');
	cartShopBox.classList.add('cart-box');
	var cartItems = document.getElementsByClassName('cart-content')[0];
	var cartItemsNames =
		cartItems.getElementsByClassName('cart-product-title');
	for (var i = 0; i < cartItemsNames.length; i++) {
		if (cartItemsNames[i].innerText == title) {
			alert('Đã có trong giỏ hàng');
			return;
		}
	}


	//the box khi them vao gio hang
	var cartBoxContent = `
	<img src="${productImg}"
		style="width: 100px; height: 100px; object-fit: contain; padding: 10px;" alt="" class="cart-img">
	<div class="detail-box" style="display: grid; row-gap: 0.5rem;">
		<div class="cart-product-title" style="font-size: 1rem; text-transform: uppercase;">${title}</div>

		<div class="cart-price" style="font-weight: 600;">${price}</div>

		<input type="number" value="${quantity}" class="cart-quantity"
			style="border: 1px solid; outline-color: rgb(0, 0, 0); width: 2.4rem; text-align: center; font-size: 1rem; ">
	</div>
	<!-- Remove cart -->
	<i class="fa-solid fa-trash cart-remove"
		style="font-size: 19px; cursor: pointer; margin-top: 2rem;"></i>
	
</div>
        `;
	cartShopBox.innerHTML = cartBoxContent;
	cartItems.append(cartShopBox);

	
	cartShopBox
		.getElementsByClassName('cart-remove')[0]
		.addEventListener('click', removeCartItem);
	cartShopBox
		.getElementsByClassName('cart-quantity')[0]
		.addEventListener('change', quantityChanged);
}



//Buy button
function buyButtonClicked() {
	// var cartContent = document.getElementsByClassName('cart-content')[0];
	// while (cartContent.hasChildNodes()) {
	// 	cartContent.removeChild(cartContent.firstChild);
	// }
	// updateTotal();
	// updateCartInStorage();
	window.location.href = "Cart.html";
	
}




//luu gio hang vao local storage
function updateCartInStorage() {
	var cartItems = document.getElementsByClassName('cart-box');
	var cartData = [];
  
	// Lặp qua từng phần tử trong giỏ hàng và lấy thông tin cần lưu trữ
	for (var i = 0; i < cartItems.length; i++) {
	  var cartBox = cartItems[i];
	  var title = cartBox.getElementsByClassName('cart-product-title')[0].innerText;
	  var price = cartBox.getElementsByClassName('cart-price')[0].innerText;
	  var quantity = cartBox.getElementsByClassName('cart-quantity')[0].value;
	  var productImg = cartBox.getElementsByClassName('cart-img')[0].src;
  
	  // Tạo đối tượng chứa thông tin của sản phẩm
	  var product = {
		title: title,
		price: price,
		quantity: quantity,
		productImg: productImg
	  };
  
	  // Thêm đối tượng sản phẩm vào mảng cartData
	  cartData.push(product);
	}
  
	// Chuyển đổi mảng cartData thành chuỗi JSON
	var jsonString = JSON.stringify(cartData);
  
	// Lưu chuỗi JSON vào localStorage với một khóa (key) là 'cartData'
	localStorage.setItem('cartData', jsonString);
  }


function getCartFromStorage() {
var cartData = localStorage.getItem('cartData');
var cartItemsContainer = document.querySelector('.cart-content');
cartItemsContainer.innerHTML = '';

// Kiểm tra xem dữ liệu giỏ hàng có tồn tại trong localStorage không
if (cartData) {
	var cartItems = JSON.parse(cartData);

	// Lặp qua từng sản phẩm trong giỏ hàng và hiển thị thông tin ra
	for (var i = 0; i < cartItems.length; i++) {
	var product = cartItems[i];

	// Tạo phần tử HTML để hiển thị thông tin sản phẩm
	var cartShopBox = document.createElement('div');
	cartShopBox.classList.add('cart-box');
	
	var cartBoxContent = `
		<img src="${product.productImg}"
		style="width: 100px; height: 100px; object-fit: contain; padding: 10px;" alt="" class="cart-img">
		<div class="detail-box" style="display: grid; row-gap: 0.5rem;">
		<div class="cart-product-title" style="font-size: 1rem; text-transform: uppercase;">${product.title}</div>
		<div class="cart-price" style="font-weight: 600;">${product.price}</div>
		<input type="number" value="${product.quantity}" class="cart-quantity"
			style="border: 1px solid; outline-color: rgb(0, 0, 0); width: 2.4rem; text-align: center; font-size: 1rem; ">
		</div>
		<!-- Remove cart -->
		<i class="fa-solid fa-trash cart-remove"
		style="font-size: 19px; cursor: pointer; margin-top: 2rem;"></i>
	`;

	cartShopBox.innerHTML = cartBoxContent;
	cartItemsContainer.appendChild(cartShopBox);

	var removeCartButton = cartShopBox.querySelector('.cart-remove');
	removeCartButton.addEventListener('click', removeCartItem);

	var quantityInput = cartShopBox.querySelector('.cart-quantity');
	quantityInput.addEventListener('change', quantityChanged);
	}
}
}
  
// Hàm xử lý sự kiện lưu thông tin giỏ hàng vào local storage
function saveCartToStorage() {
	// Lấy thông tin giỏ hàng từ giao diện và lưu vào biến cartData
  
	// Lưu cartData vào local storage
	localStorage.setItem('cart', JSON.stringify(cartData));
}
  
  // Gắn hàm xử lý sự kiện vào sự kiện beforeunload
window.addEventListener('beforeunload', saveCartToStorage);
  
  


//Xử lí ở ==============================Trang Payment========================

//hàm show danh sách sản phẩm
function showProductList(productList) {
	const cartListContainer = document.getElementsByClassName('cart__list frm__border')[0];
  
	// Xóa bỏ các sản phẩm cũ trước khi hiển thị danh sách mới
	cartListContainer.innerHTML = '';

	var total = 0;
  
	productList.forEach(product => {
	  // Tạo các phần tử HTML tương ứng với từng sản phẩm
	  const cartItem = document.createElement('div');
	  cartItem.className = 'cart__item frm__flex';
  
	  const image = document.createElement('img');
	  image.className = 'img-payment-product';
	  image.src = product.productImg;
	  console.log(image);
	  image.style.width = '25%';
	  image.alt = '';
  
	  const checkInfo = document.createElement('div');
	  checkInfo.className = 'checkInfo';
  
	  const productLink = document.createElement('a');
	  productLink.href = 'Link__sp.html';
  
	  const productName = document.createElement('p');
	  productName.textContent = product.title;
  
	  const productSize = document.createElement('p');
	  productSize.className = 'product-pay-title';
	  productSize.textContent = product.size;
  
	  const qualPrice = document.createElement('div');
	  qualPrice.className = 'qual-price';
  
	  const productQuantity = document.createElement('div');
	  productQuantity.className = 'product-pay-quantity';
	  productQuantity.textContent = "Số Lượng: " + product.quantity;
  
	  const productPrice = document.createElement('div');
	  productPrice.className = 'product-pay-price';
	  productPrice.textContent = "Giá: " + product.price;

	  total = total + parseFloat(product.price.replace('vnd', '')) * product.quantity;
  
	  // Xây dựng cấu trúc cây HTML
	  cartListContainer.appendChild(cartItem);
	  cartItem.appendChild(image);
	  cartItem.appendChild(checkInfo);
	  checkInfo.appendChild(productLink);
	  productLink.appendChild(productName);
	  productLink.appendChild(document.createElement('br'));
	  productLink.appendChild(productSize);
	  productLink.appendChild(document.createElement('br'));
	  productLink.appendChild(qualPrice);
	  qualPrice.appendChild(productQuantity);
	  qualPrice.appendChild(productPrice);
	});
	total = Math.round(total * 100) / 100;
	total = ReplaceNumberWithCommas(total);

	document.getElementsByClassName('price-first-sum')[0].innerText =
		total + ',000' + ' vnd';
	document.getElementsByClassName('price-total-sum')[0].innerText =
	total + ',000' + ' vnd';	
  }
  
  

//hàm lấy dữ liệu từ Storage và gọi hàm show danh sách
  function displayProductListFromStorage() {
	// Lấy dữ liệu từ Local Storage
	const jsonString = localStorage.getItem('cartData');
	
	if (jsonString) {
	  // Chuyển đổi chuỗi JSON thành mảng sản phẩm
	  const productList = JSON.parse(jsonString);
  
	  // Gọi hàm showProductList() và truyền mảng sản phẩm để hiển thị
	  showProductList(productList);
	}
  }
  
  // Gọi hàm displayProductListFromStorage() để hiển thị danh sách sản phẩm từ Local Storage
//   displayProductListFromStorage();
displayProductListFromStorage();


//=============Xử lí sự kiện khi nhập input
var inputElement = document.getElementById("fullnameInput");

inputElement.addEventListener("focus", function() {
  // Xóa giá trị khi nhấp vào
  inputElement.value = "";
});

inputElement.addEventListener("blur", function() {
  // Khôi phục giá trị ban đầu nếu người dùng không nhập gì
  if (inputElement.value === "") {
    inputElement.value = "Họ và tên";
  }
});

var emailElement = document.getElementById('emailInput');

emailElement.addEventListener("focus", function() {
  // Xóa giá trị khi nhấp vào
  emailElement.value = "";
});

emailElement.addEventListener("blur", function() {
  // Khôi phục giá trị ban đầu nếu người dùng không nhập gì
  if (emailElement.value === "") {
    emailElement.value = "Emaill";
  }
});





// Lấy thông tin đơn hàng lưu lại và gọi api khi click thanh toán
const buttonPaymentConfirm = document.getElementById('payment-confirm');
buttonPaymentConfirm.onclick = () =>{
	saveInformationToLocalStorage();
	var cartContent = document.getElementsByClassName('cart-content')[0];
	while (cartContent.hasChildNodes()) {
		cartContent.removeChild(cartContent.firstChild);
	}
	updateTotal();
	updateCartInStorage();
}



  function getInformation() {
	const inputs = [
		{ id: 'fullnameInput', message: 'Vui lòng nhập họ và tên.' },
		{ id: 'emailInput', message: 'Vui lòng nhập email.' },
		{ id: 'phonenumberInput', message: 'Vui lòng nhập số điện thoại.' },
		{ id: 'dobInput', message: 'Vui lòng chọn ngày sinh.' },
		{ id: 'addressInput', message: 'Vui lòng nhập địa chỉ.' },
		{ id: 'addressInfor', message: 'Vui lòng nhập địa chỉ.' }
	  ];
	
	
	  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	  const phonePattern = /^\d{10}$/;
	
	  for (const input of inputs) {
		const element = document.getElementById(input.id);
		const value = element.value;
  
		if (!value) {
		  alert(input.message);
		  element.focus();
		  return;
		}else{
			const emailElement = document.getElementById('emailInput');
			const emailValue = emailElement.value;
		  
			if (!emailPattern.test(emailValue)) {
			  alert('Email không đúng định dạng. Vui lòng kiểm tra lại.');
			  emailElement.focus();
			  return;
			}

			const phoneElement = document.getElementById('phonenumberInput');
			const phoneValue = phoneElement.value;
		  
			if (!phonePattern.test(phoneValue)) {
			  alert('Số điện thoại không đúng định dạng. Vui lòng kiểm tra lại.');
			  phoneElement.focus();
			  return;
			}else{
				const address = {
					fullname: document.getElementById('fullnameInput').value,
					email: emailValue,
					phonenumber: phoneValue,
					dob: document.getElementById('dobInput').value,
					province: document.getElementById('province').value,
					district: document.getElementById('district').value,
					ward: document.getElementById('ward').value
				  };
			  
				// Lấy thông tin giỏ hàng
				const cartItems = [];
				const cartList = document.getElementsByClassName('cart__item');
				for (let i = 0; i < cartList.length; i++) {
				  const cartItem = cartList[i];
				//   const image = cartItem.querySelector('.img-payment-product').src;
				  const title = cartItem.querySelector('p').textContent;
				  const size = cartItem.querySelector('.product-pay-title').textContent;
				  const quantity = cartItem.querySelector('.product-pay-quantity').textContent;
				  const price = cartItem.querySelector('.product-pay-price').textContent;
			  
				  const product = {
					// image,
					title,
					size,
					quantity,
					price
				  };
			  
				  cartItems.push(product);
				}
				window.location.href = "PageCompleteOder.html";

			}
		}
	  }
	
	
	

  
	// Tạo đối tượng chứa thông tin địa chỉ và giỏ hàng
	const information = {
	  address,
	  cartItems
	};
	return information;
  }
  
  

  
  //kiểm tra thông tin được lưu đúng chưa
  function saveInformationToLocalStorage() {
	const information = getInformation();
	// if(information!=null){
	// }else{
	// 	alert('Vui lòng bổ sung đầy đủ thông tin');
	// }
	const jsonString = JSON.stringify(information);
	localStorage.setItem('information', jsonString);
	// window.location.href = "PageCompleteOder.html";
  }



    function postInformationToDatabase() {
	const information = getInformation();
  
	// Gọi hàm API để post dữ liệu lên database
	// Ghi code API ở đây
  }
function getProductDetailById(productId) {
	// lấy thông tin chi tiết sản phẩm thông từ danh sách sản phẩm thông tin mã sản phẩm
	return {};
}

function getProductDetailById(productIdSale) {
	return {};
}

function getProductDetailById(productIdPants) {
	return {};
}

function getProductDetailById(productIdPantsLong) {
	return {};
}

function getProductDetailById(productIdIndex) {
	return {};
}

function renderListProducts() {
	const listProduct = getElementById('list-products');
	for (let i = 0; i < products.length; i++) {
		listProduct.innerHTML += `
        <div class="product-shirt-noibat">
                <a class="product-shirt-a" href="">
                    <img class="product-shirt-1 "src="${[
						products[i].avatar,
					]}" alt="MatSau">
                    <img class="product-shirt-2 "src="${[
						products[i].avatar2,
					]}" alt="MatTruoc">
                </a>
                <div class="product-shirt-price">
                    <h1 class="product-shirt-title">${[
						products[i].productName,
					]}</h1>
                    <p class="product-shirt-title ">${[products[i].price]}</p>
                    <button>Thêm vào giỏ hàng</button>
                </div>
            </div>
        `;
	}
}

function renderListProductsPageSale() {
	const listProductSale = getElementById('list-products-sale');
	for (let i = 0; i < productSale.length; i++) {
		listProductSale.innerHTML += `
        <div class="product-shirt-noibat">
            <a class="product-shirt-a" href="">
                 <img class="product-shirt-1 "src="${[
						productSale[i].avatar,
					]}" alt="MatSau">
                <img class="product-shirt-2 "src="${[
					productSale[i].avatar2,
				]}" alt="MatTruoc">
            </a>
            <div class="product-shirt-price">
                <h1 class="product-shirt-title">${[
					productSale[i].productName,
				]}</h1>
                <p class="product-shirt-title ">${[productSale[i].price]}</p>
            </div>
         </div>`;
	}
}

function renderListProductPants() {
	const listProductPants = getElementById('list-product-pants');
	for (let i = 0; i < productPants.length; i++) {
		listProductPants.innerHTML += `
        <div class="product-shirt-noibat">
            <a class="product-shirt-a" href="">
                 <img class="product-shirt-1 "src="${[
						productPants[i].avatar,
					]}" alt="MatSau">
                <img class="product-shirt-2 "src="${[
					productPants[i].avatar2,
				]}" alt="MatTruoc">
            </a>
            <div class="product-shirt-price">
                <h1 class="product-shirt-title">${[
					productPants[i].productName,
				]}</h1>
                <p class="product-shirt-title ">${[productPants[i].price]}</p>
            </div>
         </div>
        `;
	}
}

function renderListProductPantsLong() {
	const listProductPantsLong = getElementById('list-product-pants-long');
	for (let i = 0; i < productPantsLong.length; i++) {
		listProductPantsLong.innerHTML += `
        <div class="product-shirt-noibat">
            <a class="product-shirt-a" href="">
                <img class="product-shirt-1 "src="${[
					productPantsLong[i].avatar,
				]}" alt="MatSau">
                <img class="product-shirt-2 "src="${[
					productPantsLong[i].avatar2,
				]}" alt="MatTruoc">
            </a>
            <div class="product-shirt-price">
                <h1 class="product-shirt-title">${[
					productPantsLong[i].productName,
				]}</h1>
                <p class="product-shirt-title ">${[
					productPantsLong[i].price,
				]}</p>
            </div>
        </div>
        `;
	}
}

function renderListProductsBalo() {
	const listProductPantsLong = getElementById('list-product-balo');
	for (let i = 0; i < productBalo.length; i++) {
		listProductPantsLong.innerHTML += `
        <div class="product-shirt-noibat">
            <a class="product-shirt-a" href="">
                <img class="product-shirt-1 "src="${[
					productBalo[i].avatar,
				]}" alt="MatSau">
                <img class="product-shirt-2 "src="${[
					productBalo[i].avatar2,
				]}" alt="MatTruoc">
            </a>
            <div class="product-shirt-price">
                <h1 class="product-shirt-title">${[
					productBalo[i].productName,
				]}</h1>
                <p class="product-shirt-title ">${[productBalo[i].price]}</p>
            </div>
        </div>
        `;
	}
}

function renderListProductIndex() {
	const listProductIndex = getElementById('list-product-index');
	for (let i = 0; i < productIndex.length; i++) {
		listProductIndex.innerHTML += `
        <div class="product-shirt-noibat">
            <a class="product-shirt-a" href="ProductDetail.html">
                <img class="product-shirt-1 "src="${[
					productIndex[i].avatar,
				]}" alt="MatSau">
                <img class="product-shirt-2 "src="${[
					productIndex[i].avatar2,
				]}" alt="MatTruoc">
            </a>
            <div class="product-shirt-price">
                <h1 class="product-shirt-title">${[
					productIndex[i].productName,
				]}</h1>
                <p class="product-shirt-title ">${[productIndex[i].price]}</p>
            </div>
        </div>
        `;
	}
}
let start = 0;
const limit = 8;

function loadMoreProducts() {
	const listProductIndex = document.getElementById('list-product-index');
	const products = productIndex.slice(start, start + limit);

	for (let i = 0; i < products.length; i++) {
		listProductIndex.innerHTML += `
      <div class="product-shirt-noibat">
        <a class="product-shirt-a" href="">
          <img class="product-shirt-1 "src="${products[i].avatar}" alt="MatSau">
          <img class="product-shirt-2 "src="${products[i].avatar2}" alt="MatTruoc">
        </a>
        <div class="product-shirt-price">
          <h1 class="product-shirt-title">${products[i].productName}</h1>
          <p class="product-shirt-title">${products[i].price}</p>
        </div>
      </div>
    `;
	}

	start += limit;
}
// document
//     .getElementById("load-more-btn")
//     .addEventListener("click", loadMoreProducts);
function renderListProductAccessory() {
	const listProductAccessory = getElementById('list-product-accessory');
	for (let i = 0; i < productAccessory.length; i++) {
		listProductAccessory.innerHTML += `
        <div class="product-shirt-noibat">
            <a class="product-shirt-a" href="">
                <img class="product-shirt-1 "src="${[
					productAccessory[i].avatar,
				]}" alt="MatSau">
                <img class="product-shirt-2 "src="${[
					productAccessory[i].avatar2,
				]}" alt="MatTruoc">
            </a>
            <div class="product-shirt-price">
                <h1 class="product-shirt-title">${[
					productAccessory[i].productName,
				]}</h1>
                <p class="product-shirt-title ">${[
					productAccessory[i].price,
				]}</p>
            </div>
        </div>
        `;
	}
}

let list = document.querySelectorAll('.product-shirt');
list.forEach((sanpham) => {
	sanpham.addEventListener('click', function (event) {
		if (event.target.classList.contains('add')) {
			var sanphamMoi = sanpham.cloneNode(true);
			// let listcart=document.querySelectorAll('.cart');
			// listcart.forEach(cart =>{
			//     if(cart.get)
			// })
			document.querySelector('.listcart').appendChild(sanphamMoi);
		}
	});
});

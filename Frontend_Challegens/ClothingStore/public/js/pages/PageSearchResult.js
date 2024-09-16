const pathResult = document.getElementById('path-result');
const urlParams = new URLSearchParams(window.location.search);
const searchProductString = urlParams.get('s');
pathResult.innerHTML = `<b>#${searchProductString}</b>`;

const apiUrl = `https://lavent-clone.vercel.app/api/v1/product?searchProductString=${searchProductString}`;
let productsSearched;
const response = fetch(apiUrl)
	.then((responseJson) => responseJson.json())
	.then((json) => {
		productsSearched = json.products;
		loadMoreProductsSearched();
	});

let start = 0;
const limit = 2;
const listProductShirt = document.getElementById('list-product');
const loadingAnimation = document.getElementById('loading-animation');
const showMoreBtn = document.getElementById('show_more_btn');

function loadMoreProductsSearched() {
	loadingAnimation.style.display = 'block';
	showMoreBtn.style.display = 'none';

	if (start > productsSearched.length - 1) {
		loadingAnimation.remove();
		showMoreBtn.remove();

		if (productsSearched.length <= 0 && start <= 0) {
			listProductShirt.innerHTML = '<p>Không tìm thấy sản phẩm nào!</p>';
		}

		return;
	}

	const products = productsSearched.slice(start, start + limit);

	for (let i = 0; i < products.length; i++) {
		listProductShirt.innerHTML += `
        <div class="product-shirt-noibat">
        <a class="product-shirt-a" onclick="window.location.href = '/src/pages/ProductDetail.html?productId=${
			products[i]._id
		}';">
            <img class="product-shirt-1 "src="${[
				products[i].thumbnail,
			]}" alt="MatSau">
            <img class="product-shirt-2 "src="${[
				products[i].thumbnail,
			]}" alt="MatTruoc">
        </a>
            <div class="product-shirt-price">
                <h1 class="product-shirt-title">${[products[i].name]}</h1>
                <p class="product-shirt-title ">${[
					products[i].price.toLocaleString('it-IT', {
						style: 'currency',
						currency: 'VND',
					}),
				]}</p>
            </div>
        </div>
        `;
	}
	loadingAnimation.style.display = 'none';
	showMoreBtn.style.display = 'block';
	start += limit;
}

showMoreBtn.style.display = 'none';

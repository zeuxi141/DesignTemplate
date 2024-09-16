//===============Filter products at store pages==============
const selectSortBy = document.getElementById('select-sort-by');
const selectSortByOptions = selectSortBy.getElementsByTagName('option');
const urlParams = new URLSearchParams(window.location.search);
const sortBy = urlParams.get('sort-by');
for (let option of selectSortByOptions) {
	if (option.value === sortBy) {
		option.selected = 'selected';
	}
}
selectSortBy.onchange = function () {
	window.location.href = `/src/pages/store/Pants.html?${this.name}=${this.value}`;
};

let pageIndex = 1;
const numberOfProductsPerPage = 2;
const typeOfProduct = 1;

const apiUrl = `https://lavent-clone.vercel.app/api/v1/product?typeOfProduct=${typeOfProduct}&sortBy=${sortBy}&numberOfProductsPerPage=${numberOfProductsPerPage}`;
const listProductPants = document.getElementById('list-product-pants');
const loadingAnimation = document.getElementById('loading-animation');
const showMoreBtn = document.getElementById('show_more_btn');
async function loadMoreProductsPants() {
	loadingAnimation.style.display = 'block';
	showMoreBtn.style.display = 'none';

	const response = await fetch(apiUrl + `&pageIndex=${pageIndex}`);
	const responseJson = await response.json();
	const products = responseJson.products;

	const numberOfProducts = products.length;
	if (numberOfProducts <= 0) {
		loadingAnimation.remove();
		showMoreBtn.remove();
		return;
	}

	for (let i = 0; i < numberOfProducts; i++) {
		listProductPants.innerHTML += `
        <div class="product-shirt-noibat">
        <a class="product-shirt-a" onclick="window.location.href = '/src/pages/ProductDetail.html?productId=${
			products[i].id
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
	pageIndex++;
}

loadMoreProductsPants();

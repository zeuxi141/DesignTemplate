// =========================Form: Dang Nhap========================
const btnCloseModalElm = document.getElementById('btnCloseModal');
const formLoginElm = document.getElementById('formLogin');
const modalElm = document.getElementById('modal');
const containerFormElm = document.getElementById('containerForm');
btnCloseModalElm.addEventListener('click', function () {
	modalElm.style.display = 'none';
});
formLoginElm.addEventListener('click', function () {
	modalElm.style.display = 'block';
});
containerFormElm.addEventListener('click', function (event) {
	event.stopPropagation();
});
modalElm.addEventListener('click', function () {
	modalElm.style.display = 'none';
});
// ========================Form:DANG KY========================
const btnDangKy = document.querySelector('.auth-form__dangky--theA');
const modalDangKy = document.getElementById('modal-dangky-btn');

btnDangKy.addEventListener('click', function () {
	modalDangKy.style.display = 'block';
});

const btnCloseDangKy = document.getElementById('btnCloseModalTwo');
btnCloseDangKy.addEventListener('click', function () {
	modalDangKy.style.display = 'none';
});
const containerFormDangKy = document.getElementById('containerFormDangKy');

containerFormDangKy.addEventListener('click', function (event) {
	event.stopPropagation();
});
modalDangKy.addEventListener('click', function () {
	modalDangKy.style.display = 'none';
});
// ==================FROM:SEARCH============================
const modalSearch = document.querySelector('.modal-search');
const formSearch = document.getElementById('iconSearch');
formSearch.addEventListener('click', function () {
	modalSearch.style.display = 'block';
});

const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
searchBtn.addEventListener('click', function () {
	let inputString = searchInput.value.trim();
	if (inputString === '') {
		return;
	}

	window.location.href = `/src/pages/PageSearchResult.html?s=${inputString}`;
});

const formCancle = document.getElementById('formCancle');
formCancle.addEventListener('click', function () {
	modalSearch.style.display = 'none';
});

//
// const formCart = document.querySelector('.form-cart');
// const iconCart = document.getElementById('iconCart');
// iconCart.addEventListener('click', function () {
// 	formCart.style.display = 'block';
// });
// const closeCart = document.getElementById('closeCart');
// closeCart.addEventListener('click', function () {
// 	formCart.style.display = 'none';
// });
// ===============================
// TODO: fetch notice messages from server
let noticeMessages = [
	'Mua càng nhiều, Giảm càng sâu. Lên đến 90.000đ',
	'FREESHIP cho hoá đơn từ 1.000.000',
	'Giảm giá các sản phẩm áo',
];
const headerNotice = document.querySelector('.header-notice');
const notice = document.querySelector('.notice');
let toggleNotice = true;
(function () {
	const headerNotice = document.querySelector('.header__cart-notice');
	headerNotice.innerHTML =
		noticeMessages.length >= 100 ? '99+' : noticeMessages.length;
	for (let i = 0; i < noticeMessages.length; i++) {
		notice.innerHTML += `
        <p>${noticeMessages[i]}</p>
		<br>
        `;
	}
})();

headerNotice.addEventListener('click', function () {
	if (toggleNotice) {
		notice.style.display = 'block';
	} else {
		notice.style.display = 'none';
	}
	toggleNotice = !toggleNotice;
});

//=================================

function myFunction() {
	let dots = document.getElementById('dots');
	let moreText = document.getElementById('more');
	let btnText = document.getElementById('show_more_btn');

	if (dots.style.display === 'none') {
		dots.style.display = 'flex';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'flex';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	}
}
function myFunction_1() {
	let dots = document.getElementById('dots_1');
	let moreText = document.getElementById('more_1');
	let btnText = document.getElementById('show_more_btn_1');

	if (dots.style.display === 'none') {
		dots.style.display = 'flex';
		btnText.innerHTML = 'Read less';
		moreText.style.display = 'flex';
	} else {
		dots.style.display = 'none';
		btnText.innerHTML = 'Read more';
		moreText.style.display = 'none';
	}
}

// document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       // code for enter
//     }
// });

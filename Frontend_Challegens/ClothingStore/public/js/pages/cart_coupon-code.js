const applyCouponButton = document.querySelector('#apply-coupon');
applyCouponButton.addEventListener('click', function() {
    const couponCode = document.querySelector('#coupon-code').value;
    const couponCodes = ['SALE10', 'SALE20', 'SALE30'];
    const discountRates = [0.1, 0.2, 0.3];
    let productPriceElement = document.getElementsByClassName('price-first-sum')[0];
    var productPrice = parseFloat(productPriceElement.innerText.replace('vnd', ''));
    // Kiểm tra xem mã giảm giá có hợp lệ hay không
    const index = couponCodes.indexOf(couponCode);
    if (index !== -1) {
        // Nếu mã giảm giá hợp lệ, tính toán giá sản phẩm sau khi giảm giá và hiển thị lên màn hình
        const discountRate = discountRates[index];
        const discountedPrice = productPrice * (1 - discountRate);
        let succ = "Mã giảm giá hợp lệ"
        document.querySelector('#available').textContent = succ;
        document.querySelector('#available').style.display = 'block';
        console.log(`Giá sản phẩm sau khi giảm giá: ${discountedPrice}`);
        let discountValue = productPrice - productPrice * discountRate;
        discountValue = Math.round(discountValue * 100) / 100;
        discountValue = ReplaceNumberWithCommas(discountValue*1000);
        if(discountValue < 1000){
            discountValue = ReplaceNumberWithCommas(discountValue*1000);
        }
        document.querySelector('#discount-value').textContent = discountValue + " vnđ";
        document.querySelector('#isnotavailable').style.display = 'none';
        document.querySelector('#discount-value').style.display = 'block';
    } else {
        // Nếu mã giảm giá không hợp lệ, hiển thị thông báo lỗi lên màn hình
        let firstPrice = 320;
        console.log('Mã giảm giá không hợp lệ');
        let unsucc = "Mã giảm giá không hợp lệ";
        document.querySelector('#isnotavailable').textContent = unsucc;
        document.querySelector('#isnotavailable').style.display = 'block';
        document.querySelector('#available').style.display = 'none'
        // document.querySelector('#discount-value').style.display = 'none';
        // document.querySelector('.price-total-sum').textContent
    }
});
const sizeBtnElms = document.getElementsByClassName('size-audio');

for(let i = 0; i < sizeBtnElms.length; i++) {
    sizeBtnElms[i].addEventListener('click', function(e) {

        for(let i = 0; i < sizeBtnElms.length; i++) {
            sizeBtnElms[i].classList.remove('highlight');
        }

        e.target.classList.add('highlight');
    });
}   

// function setSizeAudio(size, quantitySize){
//     const maxLength = 3;
//     for(let i=0; i< quantitySize; i++){

//     }
//     document.getElementsByClassName("size-audio")[0];
// }

async function loadDataProductDetail(){
    var urlParams = new URLSearchParams(window.location.search);
    var productID = urlParams.get("productId");

    console.log(productID)

    let response = await fetch(`https://lavent-clone.vercel.app/api/v1/product/${productID}`);
    console.log(productID);
    response.json().then((result) => {
        // document.getElementsByClassName('breadcrumb-product').innerText = "kiendz";
        document.getElementsByClassName('breadcrumb-product')[0].innerHTML = result[0].name;
        document.getElementsByClassName('summary__title')[0].innerHTML = result[0].name;
        document.getElementsByClassName('productImg')[0].src = result[0].thumbnail;
        document.getElementsByClassName('summary__price')[0].innerHTML = result[0].price/1000 + ',000' + ' vnd';
        document.getElementById('information').innerHTML = result[0].description;
        let elmentSize = document.getElementsByClassName("size-audio")[0];
        elmentSize.innerText = result[0].size;
        elmentSize.style.display = 'block';
    })
    
} 

loadDataProductDetail();
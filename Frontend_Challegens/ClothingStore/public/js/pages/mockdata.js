// SEARCH TIM KIEM
function timkiem(){
    var a;
    var input=document.getElementById('input').value;
    console.log(input);
    var ul=document.getElementById('myUL');
    var li=ul.getElementsByTagName('li');
    // debugger
    for(let i=0;i<products.length;i++){
        if(products[i].productName.includes(input)){
            console.log(products[i].productName);
            ul.innerHTML+=`
              <li> <a href="#"></a>${products[i].productName}</li> 
            `
        }

    }
}

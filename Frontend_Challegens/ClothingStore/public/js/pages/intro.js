const informationElm = document.getElementById('information');
const SizeChartElm = document.getElementById('Size-chart');
const returnPolicyElm = document.getElementById('return-policy');
let intro1 = 0;
let intro2 = 0;
let intro3 = 0;
function information() {
    if (intro1 == 0) {
        informationElm.style.display = 'block'
        intro1 = 1;
    } else {
        informationElm.style.display = 'none'
        intro1 = 0;
    }
}
function SizeChart() {
    if (intro2 == 0) {
        SizeChartElm.style.display = 'block'
        intro2 = 1;
    } else {
        SizeChartElm.style.display = 'none'
        intro2 = 0;
    }
}
function returnPolicy() {
    if (intro3 == 0) {
        returnPolicyElm.style.display = 'block'
        intro3 = 1;
    } else {
        returnPolicyElm.style.display = 'none'
        intro3 = 0;
    }
}
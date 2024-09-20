// const topMenu = document.getElementById('custom-top-menu');
// const topMenuToggle = document.getElementById('custom-toggle-top-menu-icon');


// document.addEventListener('click', (e) => {
//     console.log(e.target);
//     if(topMenuToggle.contains(e.target)) {
//         alert('clicked');
//         //click to Toggle top menu
//         topMenu.classList.toggle('hidden');
//     }else {
//         //click outside to close top menu
//     }
// })

document.addEventListener('DOMContentLoaded', () => {
    const topMenuToggle = document.querySelector('#custom-toggle-top-menu-icon'); // Đảm bảo đúng selector
    const topMenu = document.querySelector('#custom-top-menu'); // Đảm bảo đúng selector

    if (topMenuToggle && topMenu) { // Kiểm tra nếu cả hai đều không null
        document.addEventListener('click', (e) => {
            console.log(e.target);
            if (topMenuToggle.contains(e.target)) {
                
                // Click to Toggle top menu
                topMenu.classList.toggle('hidden');
            } else {
                // Click outside to close top menu
                topMenu.classList.add('hidden'); // Tắt menu nếu click ngoài
            }
        });
    } else {
        console.error('topMenuToggle or topMenu is not found in the document');
    }
});

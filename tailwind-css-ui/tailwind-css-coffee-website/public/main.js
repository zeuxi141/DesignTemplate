// const topMenu = document.getElementById('custom-top-menu');
// const topMenuToggle = document.getElementById('custom-toggle-top-menu-icon');

document.addEventListener('DOMContentLoaded', () => {
    const topMenuToggle = document.querySelector('#custom-toggle-top-menu-icon');
    const topMenu = document.querySelector('#custom-top-menu'); 

    if (topMenuToggle && topMenu) { 
        document.addEventListener('click', (e) => {
            if (topMenuToggle.contains(e.target)) {
                topMenu.classList.toggle('custom-topmenu-expanded');
                topMenu.classList.toggle('hidden');
            } else {                
                if(topMenu.classList.contains('custom-topmenu-expanded')) {
                    topMenu.classList.remove('custom-topmenu-expanded');
                    topMenu.classList.add('hidden');
                }
            }
        });
    } else {
        console.error('topMenuToggle or topMenu is not found in the document');
    }
});

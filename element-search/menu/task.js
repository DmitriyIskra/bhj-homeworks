const mainMenu = document.querySelector('.menu_main');
const menuElements = document.querySelectorAll('.menu_sub')

function checkingMenu() {
    menuElements.forEach( element => {
        if(element.closest('.menu_active')) {
            element.classList.remove('menu_active');
            element.classList.add('menu_sub');
        };
    });
};

mainMenu.addEventListener('click', (e) => {
    
    if(e.target.closest('.menu__link') && e.target.nextElementSibling.closest('.menu_sub')) {
        e.preventDefault();
        
        checkingMenu();

        e.target.nextElementSibling.classList.remove('menu_sub');
        e.target.nextElementSibling.classList.add('menu_active');
    }
    else {
        e.preventDefault();

        e.target.nextElementSibling.classList.remove('menu_active');
        e.target.nextElementSibling.classList.add('menu_sub');
    }
})
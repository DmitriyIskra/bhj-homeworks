document.querySelector('#modal_main').classList.add('modal_active')


const modalsWindows = document.querySelectorAll('.modal')

function closeModalWindow() {
    modalsWindows.forEach( element => {
        if(element.closest('.modal_active')) {
            element.classList.remove('modal_active');
        };
    });
};

document.addEventListener('click', event => {
    if(event.target.closest('.modal__close') && event.target.closest('.show-success')) {
        closeModalWindow();

        document.querySelector('#modal_success').classList.add('modal_active');
    }
    else if(event.target.closest('.modal__close') || event.target.closest('.btn_success')) {
        closeModalWindow();
    }
});


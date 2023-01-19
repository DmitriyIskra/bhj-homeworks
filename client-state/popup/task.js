let resultCookie;

const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');


modalClose.addEventListener('click', e => { // Закрытие модального окна и добавление информации в cookie
    modal.classList.remove('modal_active');

    setCookie('conditionModal', 'true')
});



function setCookie(name, value) {     
    document.cookie = `${name}=${encodeURIComponent(value)}`
};

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const findedCookie = pairs.find( el => el.startsWith(`${name}=`));
    return findedCookie.substr(name.length + 1);
};



window.addEventListener('load', e => {  // Проверка cookie при загрузке страницы
    try {
        resultCookie = getCookie('conditionModal');
    }
    catch(error) {
        resultCookie = false;
    };

    if(resultCookie) {
        modal.classList.remove('modal_active');
    }
    else{
        modal.classList.add('modal_active');
    };
});
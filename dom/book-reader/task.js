const blockControls = document.querySelector('.book__controls');

const collectionButtonSize = document.querySelectorAll('.font-size');

const collectionButtonTextColor = document.querySelectorAll('.book__control_color > .color');
const collectionButtonBgColor = document.querySelectorAll('.book__control_background > .color');

const bookContent = document.querySelector('.book__content');


        // ********** Панель управление книгой ********** //

blockControls.addEventListener('click', e => {
    e.preventDefault();
    // ------------ Управление размером шрифта collectionButtonColor
    if (e.target.closest('.font-size')) {
        clearActiveControlSize(collectionButtonSize);
        addClassActiveControlSize(e.target);

        clearClassSizeBook(bookContent)
        let sizeText = e.target.dataset.size;
        changeSizeBook(sizeText);
    };

    // ------------ Управление цветом текста 
    if (e.target.closest('.book__control_color')) {
        clearActiveControlTextColor(collectionButtonTextColor);
        addClassActiveControlTextColor(e.target);
        
        let colorText = e.target.dataset.textColor;
        clearClassColorTextBook(bookContent);
        changeColorText(colorText);
    };

    // ------------ Управление цветом текста 
    if (e.target.closest('.book__control_background')) {
        clearActiveControlBgColor(collectionButtonBgColor);
        addClassActiveControlBgColor(e.target);
        
        let colorText = e.target.dataset.bgColor;
        clearClassColorBgBook(bookContent);
        changeColorBg(colorText);
    };
});

// **********------  Ниже функции для панели управления книгой


// *************************************************************** Функции для управление шрифтами
function clearActiveControlSize(arr) { // Очистка класса активности элемента
    arr.forEach(el => {
       if(el.matches('.font-size_active')) {
        el.classList.remove('font-size_active');
       };
    });
};

function addClassActiveControlSize(el) { // Установка класса активности элемента
    el.classList.add('font-size_active');
};

function clearClassSizeBook(el) { 
    if(el.matches('.book_fs-small')) {
        el.classList.remove('book_fs-small');
    }
    else if(el.matches('.book_fs-big')) {
        el.classList.remove('book_fs-big');
    };  
};

function changeSizeBook(size) {  // Смена шрифта текста в зависимости от выбранного размера
    switch (size) {
        case 'small' :
            bookContent.classList.add('book_fs-small');
            break;
        case 'big' :
            bookContent.classList.add('book_fs-big');
            break;
    };
};
// ***************************************************************


// *************************************************************** Функции для управления цветом текста
function clearActiveControlTextColor(arr) { // Очистка класса активности у панели управления цветом
    arr.forEach(el => {
       if(el.matches('.color_active')) {
        el.classList.remove('color_active');
       };
    });
};

function addClassActiveControlTextColor(el) { // Установка класса активности выбранному элементу
    el.classList.add('color_active');
};

function clearClassColorTextBook(el) {          // Очистка неактуального класса у элемента
    if(el.matches('.book_color-gray')) {
        el.classList.remove('book_color-gray');
    }
    else if(el.matches('.book_color-whitesmoke')) {
        el.classList.remove('book_color-whitesmoke');
    }
    else {
        el.classList.remove('book_color-black');
    };  
};

function changeColorText(colorText) {  // Установка актуального класса элементу
    bookContent.classList.add(`book_color-${colorText}`);
};
// ***************************************************************

// *************************************************************** Функции для управления цветом фона
function clearActiveControlBgColor(arr) { // Очистка класса активности у панели управления фоном
    arr.forEach(el => {
       if(el.matches('.color_active')) {
        el.classList.remove('color_active');
       };
    });
};

function addClassActiveControlBgColor(el) { // Установка класса активности выбранному элементу управления фоном
    el.classList.add('color_active');
};

function clearClassColorBgBook(el) {          // Очистка неактуального класса цвета фона у элемента
    if(el.matches('.book_bg-gray')) {
        el.classList.remove('book_bg-gray');
    }
    else if(el.matches('.book_bg-black')) {
        el.classList.remove('book_bg-black');
    }
    else {
        el.classList.remove('book_bg-white');
    };  
};

function changeColorBg(colorText) {  // Установка актуального класса цвета фона элементу
    bookContent.classList.add(`book_bg-${colorText}`);
};
// ***************************************************************




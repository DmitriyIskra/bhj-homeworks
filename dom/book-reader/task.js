const collectionButtonSize = document.querySelectorAll('.font-size');
const blockControls = document.querySelector('.book__controls');

const collectionButtonColor = document.querySelectorAll('.color')

const bookContent = document.querySelector('.book__content');


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
function clearActiveControlColor(arr) { // Очистка класса активности элемента
    arr.forEach(el => {
       if(el.matches('.color_active')) {
        el.classList.remove('color_active');
       };
    });
};

function addClassActiveControlColor(el) { // Установка класса активности элемента
    el.classList.add('color_active');
};

function clearClassColorBook(el) { 
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

function changeColorText(colorText) {  // Смена шрифта текста в зависимости от выбранного размера
    console.log(colorText)
    // bookContent.classList.add(`book_bg-${colorText.length = 5}`)/
    // switch (color) {
    //     case 'black' :
    //         bookContent.className = 'book__content book_fs-small';
    //         break;
    //     case 'gray' :
    //         bookContent.className = 'book__content book_fs-big';
    //         break;
    //     case 'whitesmoke' :
    //         bookContent.className = 'book__content book_fs-big';
    //         break;
    // };
};
// ***************************************************************





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
    if (e.target.closest('.color')) {
        clearActiveControlColor(collectionButtonColor);
        addClassActiveControlColor(e.target);
        
        clearClassColorBook(bookContent);
        let colorText = e.target.dataset.textColor;
        changeColorText(colorText);
    };
})
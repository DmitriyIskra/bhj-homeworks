
let dropDownList;
let dropDownValue;
let activeText;


function addClassActive(element) {                      // Включение отключение класса активности у выпадающего списка по нажатию на кнопку
    element.classList.toggle('dropdown__list_active');
};

function removeClassActive(element) {                   // Удаление класса активности по нажатию на элемент выпадающего списка
    element.classList.remove('dropdown__list_active');
};

function addNewText(element, text) {                    // Смена текста в кнопке, выбранного в выпадающем списке, в непосредственно активной кнопке
    element.textContent = text;
};

document.addEventListener('click', event => {
    if(event.target.closest('.dropdown__value')) {      
        dropDownList = event.target.nextElementSibling; // Получение элемента выпадающего списка при первом нажатии на кнопку
        addClassActive(dropDownList); 
    }
    else if(event.target.closest('.dropdown__link')) {
        event.preventDefault();

        activeText = event.target.textContent;          // Получение текста нажатого элемента в выпадающем списке
        dropDownValue = event.target.closest('.dropdown__list').previousElementSibling; // Получение доступа к конкретной кнопке по элементам которой происходит активность
        
        removeClassActive(event.target.closest('.dropdown__list'));
        addNewText(dropDownValue, activeText);
    };
});
    








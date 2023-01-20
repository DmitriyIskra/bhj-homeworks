const textValue = document.querySelector('#editor');
const buttonClear = document.querySelector('.clear');



textValue.addEventListener('input', function(e) {    // Сохранение введенных данных 
    sessionStorage.textValue = this.value;
});


function valueForReloadLocation (value) { // Вставка сохраненных данных при перезагрузке страницы
    if(!textValue.value && sessionStorage.textValue) {
        textValue.value = value;
    };
};

window.addEventListener('load', e => {  // При перезагрузке страницы вызываем функцию вставки сохраненных данных
    valueForReloadLocation(sessionStorage.textValue);
});


buttonClear.addEventListener('click', e => { // Очищаем поле и сохраненные данные
    e.preventDefault();

    textValue.value = '';


    delete sessionStorage.textValue;

});

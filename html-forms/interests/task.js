const interestsCheck = document.querySelectorAll('.interest__check');
const interestsMain = document.querySelector('.interests_main');

let childElementsCollection = [];
let parentElementsCollection = []; 
let siblingElementsCollection = [];
let previousElementInterest;
let conditionSibling;
let conditionUpperIndeterminate;
// Пок кликнутому чекбоксу выйти на родителя и внутри с помощь. queryselector собрать все чекбокси в коллекцию или массив

/////// ==================== START Работа с дочерними элементами 

function collectingChildElements(element) {  // Проверка на наличие соседа с определенным классом и сбор элементов с определенным классом
    if(element.closest('label').nextElementSibling && element.closest('label').nextElementSibling.classList.contains('interests_active')) {
        childElementsCollection = element.closest('label').nextElementSibling.querySelectorAll('.interest__check');    
    }
    else {
        childElementsCollection = [];
    };
};

function addCheckedToChildsElements(element) { // Присвоение активный или не активный элемент по состоянию более высокого элемента
    if(childElementsCollection && element.checked === true) {
        childElementsCollection.forEach( el => {    
            el.checked = true;
        });
    }
    else if(childElementsCollection && element.checked === false) {
        childElementsCollection.forEach( el => {    
            el.checked = false;
        });
    };
}

/////// ==================== END Работа с дочерними элементами 


/////// ==================== START Работа с верхними элементами checked or indeterminate 

function collectingCollectionUpperCheckboxes(el, activeCheckbox) {  // Собираем коллекцию верхних чекбоксов
    previousElementInterest = el.parentElement.closest('.interest');

    if(previousElementInterest) {
        parentElementsCollection.push(previousElementInterest.querySelector('.interest__check'));
    };
    
    if (previousElementInterest === null) {
                // передаем массив в следующую функцию обработчик
        checkCollectionSiblingCheckboxes(activeCheckbox);

                // обнуляем массив, промежуточную переменную нет необходимости, после последней итерации так как элемента нет, там null
        parentElementsCollection = [];
        return;
    };

    collectingCollectionUpperCheckboxes(previousElementInterest, activeCheckbox);
};

function checkCollectionSiblingCheckboxes(activeCheckbox) {  // Собираем коллекцию чекбоксов на том же уровне и проверяем одинаково ли у них состояние


    if(activeCheckbox.closest('.interests_active') !== null) {
        let preElementsSiblings = [...activeCheckbox.closest('.interests_active').children]; // Предварительный сбор, здесь лежит массив из соседствующих элементов li
        preElementsSiblings.forEach( element => siblingElementsCollection.push( element.querySelector('input') ) ); // На основе предварительного сбора, собираем массив из соседствующих элементов чекбокс
        if(activeCheckbox.checked === true) { // Проверка все ли соседние чекбоксы в одинаковом состоянии
            conditionSibling = siblingElementsCollection.every( element => element.checked === true);
        }
        else if(activeCheckbox.checked === false) {
            conditionSibling = siblingElementsCollection.every( element => element.checked === false);
        };
        addCheckedUpperCheckboxes(parentElementsCollection, activeCheckbox, conditionSibling) // Вызываем функцию присвоения состояния родительским чекбоксам на основе сбора данных
    }
    else {
        return;
    };
}

function addCheckedUpperCheckboxes(arr, activeCheckbox, conditionSibling) {  // Присваиваем состояние верхним checkbox  // conditionSibling
    conditionUpperIndeterminate = arr.every(element => element.indeterminate === true);
    
    if(conditionSibling) {
        arr.forEach(el => el.indeterminate = false);
        arr.forEach(el => el.checked = activeCheckbox.checked === true ? true : false); // после этого первому элементу родительскому ставим состояние актвного, так как мы по активному проверяем все выбраны или нет
    }
    else {
        arr.forEach(el => el.indeterminate = true);
    };

};

/////// ==================== END Работа с верхними элементами checked=true





function addEventListenerToCheckbox(el) {  // Навешивание слушателя собыиий на сработавший элемент
    el.addEventListener('change', e => {
        
        collectingChildElements(el);

        addCheckedToChildsElements(el);
        
        collectingCollectionUpperCheckboxes(el.closest('.interest'), el);

    },{'once' : true});
};

interestsMain.addEventListener('click', e => {
    if(e.target.matches('.interest__check')) {
        addEventListenerToCheckbox(e.target);
    };
});



















// interestsCheck.forEach( element => {
//     element.addEventListener('change', event => {

//         if(event.target.closest('label').nextElementSibling){
//             nextChildElements = [...event.target.closest('label').nextElementSibling.children];
//         };

//         if(event.target.checked === true && event.target.closest('label').nextElementSibling) {
//             nextChildElements.forEach( element => {
//                 element.children[0].children[0].checked = true;
//             });
//         }
//         else if(event.target.checked === false && event.target.closest('label').nextElementSibling) {
//             nextChildElements.forEach( element => {
//                 element.children[0].children[0].checked = false;
//             });
//         };
//     });
// });
// && event.target.closest('label').nextElementSibling.matches('.interests_active')



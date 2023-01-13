const interestsCheck = document.querySelectorAll('.interest__check');
const interestsMain = document.querySelector('.interests_main');

let childElementsCollection = []; // Коллекция дочерних элементов от активного чекбокса
let conditionSibling;             // Общее состояние соседних чекбоксов
let collectionElementsSiblings = []; // Коллекция соседних элементов
let parentCheckbox;               // Родительский чекбокс


/////// ==================== START Работа с дочерними элементами, присвоение им состояния по состоянию родительского

function collectingChildElements(element) {  // Проверяем один уровень чекбоксов или больше(по наличию в следующем элементе interests_active), если да собираем в следующем
    if(element.closest('label').nextElementSibling && element.closest('label').nextElementSibling.classList.contains('interests_active')) { // элементе чекбоксы
        childElementsCollection = element.closest('label').nextElementSibling.querySelectorAll('.interest__check');    
    }
    else {
        childElementsCollection = [];
    };
};

function addCheckedToChildsElements(element) { // Активация или деактивация дочерних чекбоксов по состоянию родительского
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
};

/////// ==================== END Работа с дочерними элементами 



function findSiblingElements(activeCheckbox) {
    let tempElementsSiblings; // Обнулять при выборе другого уровня чекбоксов не нужно так как переменная пересоздается и соответственно обнуляется (всегда свежие данные)

    if(activeCheckbox.closest('.interests_active')) {
        tempElementsSiblings = [...activeCheckbox.closest('.interests_active').children]; // Собрали соседние li на уровне активного

        collectionElementsSiblings = tempElementsSiblings.map(el => el.querySelector('input')); // Собрали коллекцию соседних чекбоксов

        parentCheckbox = activeCheckbox.closest('.interests_active').previousElementSibling.querySelector('input'); // Нашли родительский чекбокс
    }
    else {
        return; // Остановка рекурсии когда выше нет класса interests_active и нечего собирать
    };
    


    let checkIndeterminate = collectionElementsSiblings[0].indeterminate // Проверка первого элемента в коллекции соседних на промежуточное состояние



    if(checkIndeterminate) {
        conditionSibling = 'indeterminate';  // Если по результатам проверки выше true то записываем кодовое слово
    }
    else if(activeCheckbox.checked === true) { // Если активный чекбокс активен
        conditionSibling = collectionElementsSiblings.every( element => element.checked === true); // Проверка все ли соседние чекбоксы в одинаковом состоянии
    }
    else if(activeCheckbox.checked === false) {      
        conditionSibling = collectionElementsSiblings.every( element => element.checked === false); // Проверка все ли соседние чекбоксы в одинаковом состоянии
    };



    if(conditionSibling === 'indeterminate') {  // Если по очередной проходке выясняется что в коллекции соседних элементов первый в промежуточном состоянии
        parentCheckbox.indeterminate = true;    // то родительский чекбокс данной коллекции должен быть в промежуточном состоянии
    }
    else if(conditionSibling) {
        parentCheckbox.indeterminate = false;
        parentCheckbox.checked = activeCheckbox.checked; // если все элементы выбраны или не выбраны то ставим родительскому чекбоксу состояние активного чекбокса
    }
    else {
        parentCheckbox.indeterminate = true;  // При первой проходке если все элементы в коллекции соседних элементов не в одинаковом состоянии, родительскому чекбоксу
    };                                          // актуальной коллекции присваиваем промежуточное состояние.
    
    findSiblingElements(parentCheckbox);
};



function addEventListenerToCheckbox(el) {  // Навешивание слушателя собыиий на сработавший элемент
    el.addEventListener('change', e => {
        
        collectingChildElements(el); // Собераем дочерние элементы

        addCheckedToChildsElements(el); // Присваиваем состояние дочерним элементам
        
        findSiblingElements(el); // Ищем соседние элементы относительно активного

    },{'once' : true});
};

interestsMain.addEventListener('click', e => {
    if(e.target.matches('.interest__check')) {
        addEventListenerToCheckbox(e.target);
    };
});

//////////////////////////////////////////////////////////////////////////////////////////////////////



// Простая версия

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



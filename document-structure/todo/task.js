const tasksInput = document.querySelector('.tasks__input');
const tasksAdd = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');

let inputValue;  

tasksAdd.addEventListener('click', (e) => {
    e.preventDefault();

    inputValue = tasksInput.value.trim();

    if (inputValue) {
        tasksList.insertAdjacentHTML( 
            'beforeend', `<div class="task">
                            <div class="task__title">
                                ${inputValue}
                            </div>
                            <a href="#" class="task__remove">&times;</a>
                        </div>`
         );    
    }; 
    
    tasksInput.value = '';
});

tasksList.addEventListener('click', (e) => {
    if(e.target.matches('.task__remove')) {
        e.target.closest('.task').remove()
    }
})

// * В первом задании, подсказку следует скрывать по повторному клику по ссылке, а не по странице. Так что, обработчик события по всему документу можно убрать.

// * В третьем задании, добавление в корзину следует выполнять только по кнопке "Добавить в корзину"...и увеличение колества позиций в корзине так же должно выполняться только по кнопке добавления....Клик по кнопкам плюса и минуса должны менять количество только на витрине (карточке продукта).


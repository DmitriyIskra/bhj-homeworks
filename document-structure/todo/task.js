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




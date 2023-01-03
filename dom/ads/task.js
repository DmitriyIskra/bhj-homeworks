const colectionRotators = document.querySelectorAll('.rotator__case');
let counter = 0;
let speedInterval = 1000;



function addClassRotatorCaseActive(i) {             // Смена показываемого текста
    colectionRotators[i].classList.add('rotator__case_active');
};

function clearRotatorCaseActive(arr) {              // Скрытие не актуального текста, сброс текста по умолчанию
    arr.forEach(element => {
        if(element.matches('.rotator__case_active')) {
            element.classList.remove('rotator__case_active');
            element.style.color = '#000';
        };
    });
};

function changeColorActiveText(i) {                 // Смена цвета показываемого текста
    let textColor = colectionRotators[i].dataset.color;
    colectionRotators[i].style.color = textColor;
};

function changeSpeedInterval(i) {                   // смена скорости показа текста в зависимости от переданного индекса
    speedInterval = i <= 5 ? +colectionRotators[i].dataset.speed : 1000;
};


function rotatorText() {                            // Управление сменой текста
    
    clearRotatorCaseActive(colectionRotators);

    if(counter < colectionRotators.length) {
        changeColorActiveText(counter)              // Подготовка и показ текста
        addClassRotatorCaseActive(counter);
        changeSpeedInterval(counter);

        counter += 1;                               // Работает как индекс какой элемент в работе (работает на опережение +1 от активного для подготовки следующего текста)
    }
    else {
        changeColorActiveText(0);                   // Обнуление для зацикливания
        addClassRotatorCaseActive(0);

        counter = 0;    
    };

    startTimeout(speedInterval);                    // Вызов нового таймаута когда все функции выполнились, для смены текста и тд
};

function startTimeout(speed) {                      // Старт таймаута
    setTimeout( () => rotatorText(), speed);
};

startTimeout();

// debugger;
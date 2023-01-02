const colectionRotators = document.querySelectorAll('.rotator__case');
let counter = 0;
let speedInterval = 1000;

function changeColorActiveText(i) {
    let textColor = colectionRotators[i].dataset.color;
    colectionRotators[i].style.color = textColor;
};

function changeSpeedInterval(i) {
    speedInterval = i <= 5 ? +colectionRotators[i].dataset.speed : 1000;
};

function addClassRotatorCaseActive(i) {
    colectionRotators[i].classList.add('rotator__case_active');
};

function clearRotatorCaseActive(arr) {
    arr.forEach(element => {
        if(element.matches('.rotator__case_active')) {
            element.classList.remove('rotator__case_active');
            element.style.color = '#000';
        };
    });
};


function rotatorText() {
    
    clearRotatorCaseActive(colectionRotators);

    if(counter < colectionRotators.length) {
        changeColorActiveText(counter)
        addClassRotatorCaseActive(counter);
        changeSpeedInterval(counter);

        counter += 1;  
    }
    else {
        changeColorActiveText(0);
        addClassRotatorCaseActive(0);

        counter = 0;    
    };

    startTimeout(speedInterval);    
};

function startTimeout(speed) {
    setTimeout( () => rotatorText(), speed);
};

startTimeout();

// debugger;
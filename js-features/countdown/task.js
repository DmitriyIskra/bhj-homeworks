
// const timer = document.querySelector('#timer');

// function counterTimer() {  
//     let counter = +timer.textContent;

//     if(counter === 0) {
//         alert('Вы победили в конкурсе!');
//     }
//     else {
//         setTimeout(() => {
//             counter--; 

//             timer.textContent = counter;
    
//             counterTimer();
//         }, 1000)
//     }
// };

// counterTimer();

////--------------------------- TIMER FULL FORMAT------------------------------------------------------

const timerHours = document.querySelector('#hours');
const timerMinutes = document.querySelector('#minutes');
const timerSeconds = document.querySelector('#seconds');
let intervalId;

function counterHours() {
    if(+timerHours.textContent === 0) {
        alert('Вы победили в конкурсе!');
        
        clearInterval(intervalId);
        
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
    }
    else if(+timerHours.textContent > 10) {
        timerHours.textContent = +timerHours.textContent - 1;
    }
    else {
        timerHours.textContent = `0${+timerHours.textContent - 1}`;
    }
};

function counterMinutes() {
    if(+timerMinutes.textContent === 0) {
        timerMinutes.textContent = '59';

        counterHours();
    }
    else if(+timerMinutes.textContent > 10) {
        timerMinutes.textContent = +timerMinutes.textContent - 1;
    }
    else {
        timerMinutes.textContent = `0${+timerMinutes.textContent - 1}`;
    }
};

(function counterSeconds() {
    intervalId = setInterval(() => {
        if(+timerSeconds.textContent === 0){
            timerSeconds.textContent = '59';
            
            counterMinutes();
        }
        else if(+timerSeconds.textContent > 10) {
            timerSeconds.textContent = +timerSeconds.textContent - 1;
        }
        else {
            timerSeconds.textContent = `0${+timerSeconds.textContent - 1}`;
        }
    }, 1000)
})();
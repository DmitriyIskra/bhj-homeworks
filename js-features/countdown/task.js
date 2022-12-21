
const timer = document.querySelector('#timer');

function counterTimer() {  
    let counter = +timer.textContent;

    if(counter === 0) {
        alert('Вы победили в конкурсе!');
    }
    else {
        setTimeout(() => {
            counter--;

            timer.textContent = counter;
    
            counterTimer();
        }, 1000)
    }
};

counterTimer();
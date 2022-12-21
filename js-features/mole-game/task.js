 const holesCollection = document.querySelector('.hole-game');
 const counterDeadMole = document.querySelector('#dead');
 const counterLost = document.querySelector('#lost');

 holesCollection.addEventListener('click', (e) => {
    if(e.target.closest('.hole_has-mole')) {
        counterDeadMole.textContent = +counterDeadMole.textContent + 1;

        if(+counterDeadMole.textContent === 10) {
            counterDeadMole.textContent = '0';
            counterLost.textContent = '0';
            alert('Вы победили, кротов больше нет');
        };
    }
    else {
        counterLost.textContent = +counterLost.textContent + 1;

        if(+counterLost.textContent === 5) {
            counterDeadMole.textContent = '0';
            counterLost.textContent = '0';
            alert('Мазила!!! Попробуй еще раз, вдруг получится)))');
        };
    };
 });


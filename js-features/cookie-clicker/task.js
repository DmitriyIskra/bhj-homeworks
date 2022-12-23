 const clickerCounter = document.querySelector('#clicker__counter');
 const clickerSpeed = document.querySelector('#clicker__speed');
 let lastClickTime = 0;

 const cookie = document.querySelector('.clicker__cookie');

 cookie.addEventListener('click', () => {
    // Счетчик кликов
    clickerCounter.textContent = +clickerCounter.textContent + 1;

    if(cookie.width === 200) {
        cookie.width = 250;
    }
    else {
        cookie.width = 200;
    };

    // Скорость клика
    clickerSpeed.textContent = (1 / (Date.now()/1000 - lastClickTime)).toFixed(2);
    lastClickTime = Date.now()/1000;
 });
 const clickerCounter = document.querySelector('#clicker__counter');

 const cookie = document.querySelector('.clicker__cookie');

 cookie.addEventListener('click', () => {
    clickerCounter.textContent = +clickerCounter.textContent + 1;

    if(cookie.width === 200) {
        cookie.width = 250;
    }
    else {
        cookie.width = 200;
    };
 });
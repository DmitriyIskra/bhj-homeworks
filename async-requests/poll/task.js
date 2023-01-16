
const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');
const WindowPopUp = document.querySelector('.content__window-pop-up')
const closePopUp = document.querySelector('.content__close-pop-up');

let response;




let xhr = new XMLHttpRequest();  // ПЕРВОЕ ЗАПОЛНЕНИЕ СТРАНИЦЫ

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.send();

xhr.addEventListener('readystatechange', e => {
    if(xhr.readyState === xhr.DONE) {
        response = xhr.responseText;

        response = JSON.parse(response);
        
        pollTitle.textContent = response.data.title;

        response.data.answers.forEach( (el, index, array) => {
            pollAnswers.insertAdjacentHTML(
                'beforeend', `
                <button class="poll__answer">
                    ${response.data.answers[index]}
                </button>
                `
            );
        });
    };
});



setInterval(e => {  // ОБНОВЛЕНЕ СТРАНИЦЫ
 
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

    xhr.send();

    xhr.addEventListener('readystatechange', e => {
        if(xhr.readyState === xhr.DONE) {
            response = xhr.responseText;

            response = JSON.parse(response);

            pollTitle.textContent = '';
            pollAnswers.innerHTML = '';
            
            pollTitle.textContent = response.data.title;

            response.data.answers.forEach( (el, index, array) => {
                pollAnswers.insertAdjacentHTML(
                    'beforeend', `
                    <button class="poll__answer">
                        ${response.data.answers[index]}
                    </button>
                    `
                );
            });
        };
    });
}, 2000);


pollAnswers.addEventListener('click', e => { // Вызов всплывающего окна по нажатию на ответ
    if(e.target.matches('.poll__answer')) {
        WindowPopUp.classList.remove('window_hide');
    };
});



closePopUp.addEventListener('click', e => { // Закрытие всплывающего окна
    e.preventDefault();

    WindowPopUp.classList.add('window_hide');
});


const loader = document.querySelector('.loader');
const itemsValutes = document.querySelector('#items');

let responseValutesObject;


let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.send();

xhr.addEventListener('readystatechange', e => {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
        loader.classList.remove('loader_active');
        responseValutesObject = JSON.parse(xhr.responseText);
         
        for( let item in responseValutesObject.response.Valute) {
            itemsValutes.insertAdjacentHTML('beforeend', `
                <div class="item">
                    <div class="item__code">
                        ${responseValutesObject.response.Valute[item].CharCode}
                    </div>
                    <div class="item__value">
                        ${responseValutesObject.response.Valute[item].Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>
            `);
        };
    };
});



const tooltip = document.querySelector('.tooltip');
const elemHasTooltip = document.querySelectorAll('.has-tooltip');

let valuetooltip;
let positionXClick;
let positionYClick;
let preActiveElement;

elemHasTooltip.forEach(el => el.addEventListener('click', (e) => {
    e.preventDefault();

    if(tooltip.textContent === e.target.title) {
        tooltip.classList.remove('tooltip_active');
        tooltip.textContent = 'Проверка';

        return;
    };

    valuetooltip = e.target.title;

    positionXClick = e.target.getBoundingClientRect().left;
    positionYClick = e.target.getBoundingClientRect().bottom;

    tooltip.textContent = valuetooltip;
    tooltip.setAttribute('style', `left: ${positionXClick}px; top: ${positionYClick + 7}px`);
    tooltip.classList.add('tooltip_active');
}));


// * В третьем задании, добавление в корзину следует выполнять только по кнопке "Добавить в корзину"...и увеличение колества позиций в корзине так же должно выполняться только по кнопке добавления....Клик по кнопкам плюса и минуса должны менять количество только на витрине (карточке продукта).
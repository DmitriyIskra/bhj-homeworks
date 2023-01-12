const tooltip = document.querySelector('.tooltip');
const elemHasTooltip = document.querySelectorAll('.has-tooltip');

let valuetooltip;
let positionXClick;
let positionYClick;

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



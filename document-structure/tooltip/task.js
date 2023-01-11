const tooltip = document.querySelector('.tooltip');

document.addEventListener('click', (e) => {
    let valuetooltip;
    let positionXClick;
    let positionYClick;
    let preActiveElement;

    if(e.target.closest('.has-tooltip')) {
        e.preventDefault();

        if(preActiveElement) {
            preActiveElement.classList.remove('tooltip_active');
        };

        preActiveElement = e.target;

        valuetooltip = e.target.title;

        positionXClick = e.target.getBoundingClientRect().left;
        positionYClick = e.target.getBoundingClientRect().bottom;

        tooltip.textContent = valuetooltip;
        tooltip.setAttribute('style', `left: ${positionXClick}px; top: ${positionYClick + 7}px`);
        tooltip.classList.add('tooltip_active');
    }
    else {
        tooltip.classList.remove('tooltip_active');
    };
});
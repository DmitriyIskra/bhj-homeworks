
let dropDownList;
let dropDownValue;
let activeText;


function addClassActive(element) {
    element.classList.add('dropdown__list_active');
};

function removeClassActive(element) {
    element.classList.remove('dropdown__list_active');
};

function addNewText(element, text) {
    element.textContent = text;
};

document.addEventListener('click', event => {
    if(event.target.closest('.dropdown__value')) {
        dropDownList = event.target.nextElementSibling;
        addClassActive(dropDownList); 
    }
    else if(event.target.closest('.dropdown__link')) {
        event.preventDefault();

        activeText = event.target.textContent;
        dropDownValue = event.target.closest('.dropdown__list').previousElementSibling;
        
        removeClassActive(event.target.closest('.dropdown__list'));
        addNewText(dropDownValue, activeText);
    };
});
    








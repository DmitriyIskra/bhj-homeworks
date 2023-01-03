 const navigator = document.querySelector('.tab__navigation');
 const navigatorElements = document.querySelectorAll('.tab');
 const contentElements = document.querySelectorAll('.tab__content');
 let indexActiveElementNavigator;


 function findIndexActiveNavigation(activeAlement) {      // Определение индекса активного пункта навигации
    navigatorElements.forEach((element, index, array) => {
        if(activeAlement.textContent === element.textContent){
            indexActiveElementNavigator = index;
        };
    });
 };

 function clearClassActive() {                             // Очистка элементов навигации от класса активности
    navigatorElements.forEach(e => {
        if(e.classList.contains('tab_active')) {
            e.classList.remove('tab_active');
        };
    });

    contentElements.forEach(e => {                         // Очистка элементов контента от класса активности
        if(e.classList.contains('tab__content_active')) {
            e.classList.remove('tab__content_active');
        };
    });
 };

 function addClassActiveToNavigator(element) {              // Присвоение класса активности выбранному элементу
    element.classList.add('tab_active');
 };

 function addClassActiveToContent(element) {                // Присвоение класса активности элементу контента
    element.classList.add('tab__content_active');
 };




 navigator.addEventListener('click', e => {
    clearClassActive();

    if(e.target.closest('.tab')) {
        findIndexActiveNavigation(e.target);
        addClassActiveToNavigator(e.target);
    };

    addClassActiveToContent(contentElements[indexActiveElementNavigator]);
 });
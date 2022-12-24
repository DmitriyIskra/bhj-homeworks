const sliderElement = document.querySelector('.slider');

const collectionSliderImages = document.querySelectorAll('.slider__item');
const collectionDots = document.querySelectorAll('.slider__dot');

let indexLastActiveItem;  // --- Индекс последнего активного изображения
let activeNavigationEement; // --- маячек для фиксации на какой элемент навигации было нажатие
let indexActiveDot; // -- Индекс активной точки


                // --- Очистка класса slider__item_active и сохранение индекса последнего активного элемента
function clearClassActiveImage() {
    collectionSliderImages.forEach( (element, index, array) => {
        if(element.closest('.slider__item_active')) {
            element.classList.remove('slider__item_active');

            indexLastActiveItem = index;
        };
    }); 
};
                // --- Очистка класса slider__dot_active
function clearClassDotActive() {
    collectionDots.forEach( element => {
        if(element.closest('.slider__dot_active')) {
            element.classList.remove('slider__dot_active');
        };
    }); 
};


                // --- Переключение картинки в зависимости от нажатого элемента
function changeImageSlider() {
    clearClassActiveImage();
    clearClassDotActive();
        // Работа слайдера по нажатию стрелки next
    if(indexLastActiveItem === collectionSliderImages.length - 1 && activeNavigationEement === 'next') {
        collectionSliderImages[0].classList.add('slider__item_active');
        collectionDots[0].classList.add('slider__dot_active');
    }
    else if(indexLastActiveItem < collectionSliderImages.length - 1 && activeNavigationEement === 'next') {
        collectionSliderImages[indexLastActiveItem + 1].classList.add('slider__item_active');
        collectionDots[indexLastActiveItem  + 1].classList.add('slider__dot_active');
    };

        // Работа слайдера по нажатию стрелки next
    if(indexLastActiveItem === 0 && activeNavigationEement === 'prev') {
        collectionSliderImages[collectionSliderImages.length - 1].classList.add('slider__item_active');
        collectionDots[collectionSliderImages.length - 1].classList.add('slider__dot_active');
    }
    else if(indexLastActiveItem < collectionSliderImages.length && activeNavigationEement === 'prev') {
        collectionSliderImages[indexLastActiveItem - 1].classList.add('slider__item_active');
        collectionDots[indexLastActiveItem - 1].classList.add('slider__dot_active');
    };

        // Работа слайдера по нажатию на точку
    if(activeNavigationEement === 'dot') {
        collectionSliderImages[indexActiveDot].classList.add('slider__item_active');
        collectionDots[indexActiveDot].classList.add('slider__dot_active');
    };

    
};


                // --- Событие нажатьия на элемент навигации и определение нажатого элемента навигации
sliderElement.addEventListener('click', event => {
    if(event.target.closest('.slider__arrow_next')) {
        activeNavigationEement = 'next';
    }
    else if(event.target.closest('.slider__arrow_prev')) {
        activeNavigationEement = 'prev';
    }
    else if(event.target.closest('.slider__dot')) {
        activeNavigationEement = 'dot';
        indexActiveDot = +event.target.getAttribute('data-num');  // -- Значение атрибута для дальнейшего назначения индекса активного изображения и точки 
    };

    changeImageSlider();
});
const cart = document.querySelector('.cart')
const cartProducts = document.querySelector('.cart__products');
const products = document.querySelector('.products');

let activeProduct;
let buttonAdd;
let buttonSubtract;
let productQuantity;

let imgActiveProductSrc;
let idActiveProduct;
let productQuantityValue;
let activeProductInCart;



//***************************************************************** START УПРАВЛЕНИЕ КОЛЛИЧЕСТВОМ ТОВАРА */

function addQuantityProduct(idActiveProduct, productQuantity, productQuantityValue, activeProductInCart, imgActiveProduct) { // Функция прибавления количества товара
    
    productQuantity.textContent = productQuantityValue + 1;

    if(!cartProducts.querySelector(`[data-id="${idActiveProduct}"]`)) { // Добавить если этого товара нет, по нажатию на прибавление количества
        addProductToCart(idActiveProduct, imgActiveProduct, productQuantity.textContent);
        
    };

    if(activeProductInCart) {
        activeProductInCart.querySelector('.cart__product-count').textContent = productQuantity.textContent;
    };
};

// -----------

function subtractQuantityProduct(el, productQuantity, productQuantityValue, activeProductInCart) { // Функция уменьшения количества товара
    if(productQuantityValue > 1) {
        productQuantity.textContent = productQuantityValue - 1;

        activeProductInCart.querySelector('.cart__product-count').textContent = productQuantity.textContent;
    }
    else {
        activeProductInCart.remove(); // удаление товара из корзины если количество 0
    };

    if(cartProducts.children.length === 0) { // Скрытие корзины если в корзине пусто
        activationDeactivationCart(false);
    };
};

//***************************************************************** END УПРАВЛЕНИЕ КОЛЛИЧЕСТВОМ ТОВАРА */





//***************************************************************** START АКТИВАЦИЯ ДЕАКТИВАЦИЯ КОРЗИНЫ */

function activationDeactivationCart(value) {
    if(value) {
        cart.classList.remove('cart_hidden');
    }
    else {
        cart.classList.add('cart_hidden');
    };
};

//***************************************************************** END АКТИВАЦИЯ ДЕАКТИВАЦИЯ КОРЗИНЫ */



//***************************************************************** START ДОБАВЛЕНИЕ ТОВАРА В КОРЗИНУ ПО НАЖАТИЮ НА КНОПКУ "ДОБАВИТЬ В КОРЗИНУ" */

function addProductToCart(idActiveProduct, imgActiveProduct, productQuantityValue) { // Добавление товаров в корзину
    if(cartProducts.children.length === 0) { // Активация корзины если в корзине пусто
        activationDeactivationCart(true);
    };
// console.log(productQuantityValue)
    if(!cartProducts.querySelector(`[data-id="${idActiveProduct}"]`)) {
        cartProducts.insertAdjacentHTML('beforeend', `
        <div class="cart__product" data-id="${idActiveProduct}">
            <img class="cart__product-image" src="${imgActiveProduct}">
            <div class="cart__product-count">${productQuantityValue}</div>
            <div class="remove-product" style="color: red; text-align: center; cursor: pointer;">Удалить</div>
        </div>
        `);
    };
};

//***************************************************************** END ДОБАВЛЕНИЕ ТОВАРА В КОРЗИНУ ПО НАЖАТИЮ НА КНОПКУ "ДОБАВИТЬ В КОРЗИНУ" */



//***************************************************************** START УДАЛЕНИЕ ТОВАРА ИЗ КОРЗИНЫ ПО НАЖАТИЮ НА КНОПКУ УДАЛИТЬ */
cartProducts.addEventListener('click', (e) => {  // Удаление товара из корзины по нажатию на удалить
    if(e.target.matches('.remove-product')) {
        e.target.closest('.cart__product').remove(); 
    };

    if(cartProducts.children.length === 0) { // Активация корзины если в корзине пусто
        activationDeactivationCart(false);
    };
});

//***************************************************************** END УДАЛЕНИЕ ТОВАРА ИЗ КОРЗИНЫ ПО НАЖАТИЮ НА КНОПКУ УДАЛИТЬ */

products.addEventListener('click', (e) => {
    activeProduct = e.target.closest('.product'); // активный продукт
    
    productQuantity = activeProduct.querySelector('.product__quantity-value'); // Блок с количеством товара
    
    idActiveProduct = activeProduct.dataset.id; // Получение id активного продукта
    productQuantityValue = +productQuantity.textContent; // Получение/обновление количества товара в активном элементе
    imgActiveProductSrc = activeProduct.querySelector('img').src;



    if(e.target.matches('.product__quantity-control_inc') || e.target.matches('.product__quantity-control_dec')) { 
        activeProductInCart = cartProducts.querySelector(`[data-id="${idActiveProduct}"]`);  // Получение активного элемента в корзине
    };

    if(e.target.matches('.product__add')) {             // Вызов функции отправление товара в корзину и актиации корзины
        addProductToCart(idActiveProduct, imgActiveProductSrc, productQuantityValue)
    };

    if(e.target.matches('.product__quantity-control_inc')) { // Вызов функции прибавления количества товара
        addQuantityProduct(idActiveProduct, productQuantity, productQuantityValue, activeProductInCart, imgActiveProductSrc);
    };

    if(e.target.matches('.product__quantity-control_dec')) { // Вызов функции уменьшения количества товара
        subtractQuantityProduct(e.target, productQuantity, productQuantityValue, activeProductInCart);
    }; 
    
});


// При нажатии на кнопку удалить корзина не скрывается
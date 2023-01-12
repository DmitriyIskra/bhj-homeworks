const cart = document.querySelector('.cart')
const cartProducts = document.querySelector('.cart__products');
const products = document.querySelector('.products');

let activeProduct;
let productQuantity;

let imgActiveProductSrc;
let idActiveProduct;
let productQuantityValue;
let activeProductInCart;
let cartProductCount;



//***************************************************************** START УПРАВЛЕНИЕ КОЛЛИЧЕСТВОМ ТОВАРА */

function addQuantityProduct(productQuantity, productQuantityValue) { // Функция прибавления количества товара
    productQuantity.textContent = productQuantityValue + 1;
};

// -----------

function subtractQuantityProduct(productQuantity, productQuantityValue) { // Функция уменьшения количества товара
    if(productQuantityValue > 1) {
        productQuantity.textContent = productQuantityValue - 1;
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

    if(!cartProducts.querySelector(`[data-id="${idActiveProduct}"]`)) {
        cartProducts.insertAdjacentHTML('beforeend', `
        <div class="cart__product" data-id="${idActiveProduct}">
            <img class="cart__product-image" src="${imgActiveProduct}">
            <div class="cart__product-count">${productQuantityValue}</div>
            <div class="remove-product" style="color: red; text-align: center; cursor: pointer;">Удалить</div>
        </div>
        `);
    }
    else {
        
        activeProductInCart = cartProducts.querySelector(`[data-id="${idActiveProduct}"]`);  // Получение активного элемента в корзине 
        cartProductCount = activeProductInCart.querySelector('.cart__product-count'); // Получение элемента количества товара активного продукта в корзине 
        cartProductCount.textContent = productQuantityValue + +cartProductCount.textContent; // Новое колличество товара в корзине при повторном добавлении
    };
};

//***************************************************************** END ДОБАВЛЕНИЕ ТОВАРА В КОРЗИНУ ПО НАЖАТИЮ НА КНОПКУ "ДОБАВИТЬ В КОРЗИНУ" */



//***************************************************************** START УДАЛЕНИЕ ТОВАРА ИЗ КОРЗИНЫ ПО НАЖАТИЮ НА КНОПКУ УДАЛИТЬ */
cartProducts.addEventListener('click', (e) => {  // Удаление товара из корзины по нажатию на удалить
    if(e.target.matches('.remove-product')) {
        e.target.closest('.cart__product').remove(); 
    };

    if(cartProducts.children.length === 0) { // деактивация корзины если в корзине пусто
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



    if(e.target.matches('.product__add')) {             // Вызов функции отправление товара в корзину и актиации корзины
        addProductToCart(idActiveProduct, imgActiveProductSrc, productQuantityValue, activeProductInCart)
    };

    if(e.target.matches('.product__quantity-control_inc')) { // Вызов функции прибавления количества товара
        addQuantityProduct(productQuantity, productQuantityValue);
    };

    if(e.target.matches('.product__quantity-control_dec')) { // Вызов функции уменьшения количества товара
        subtractQuantityProduct(productQuantity, productQuantityValue);
    }; 
    
});
// debugger;

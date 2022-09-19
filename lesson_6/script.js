/* 1. Продолжаем реализовывать модуль корзины:
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без
перезагрузки страницы;
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего
вида.
 */


// Решение:

// 1)

'use strict';

const basket = {

    goods: [
        { name: 'pencils', amount: 0, price: 20 },
        { name: 'notebooks', amount: 0, price: 30 },
        { name: 'rulers', amount: 0, price: 15 }
    ],


    countBasketPrice() {

        let summPriceAllGoods = 0;
        let countAllGoods = 0;

        for (let i = 0; i < this.goods.length; i++) {
            summPriceAllGoods += this.goods[i].amount * this.goods[i].price;
        }

        for (let j = 0; j < this.goods.length; j++) {
            countAllGoods += this.goods[j].amount * 1;
        }

        console.log(this.goods);
        console.log(`Всего товаров в корзине: ${countAllGoods}`);
        console.log(`Общая стоимость: ${summPriceAllGoods}`);

        countAllGoods !== 0
            ?
            bscketText.textContent = `В корзине: ${countAllGoods} товаров на сумму ${summPriceAllGoods} рублей`
            :
            bscketText.textContent = 'Корзина пуста';
    }
};

let basketLine = document.querySelector('.cart');
let bscketText = document.createElement('p')
basketLine.appendChild(bscketText);
bscketText.className = 'bscketText';

console.log(basket.countBasketPrice());


const сatalog = {

    goods: [
        { name: 'pencils', amount: 0, price: 20 },
        { name: 'notebooks', amount: 0, price: 30 },
        { name: 'rulers', amount: 0, price: 15 }
    ],

    basket: null,

    init(basket) {
        this.basket = basket;
    },
    putGoodInBasket() {
        let good;
        this.basket.putGoodInBasket(good);
    }
};

сatalog.init(basket);


window.addEventListener('click', function (e) {

    let counter;
    let numberItem;

    if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {
        const counterWrapper = e.target.closest('.counter_wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if (e.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
        basket.goods.amount = counter.innerText;
        numberItem = counter.innerText;

        if (e.target.classList.contains('counter_plus_0')) {
            basket.goods[0].amount = numberItem;
            basket.countBasketPrice();
        }

        if (e.target.classList.contains('counter_plus_1')) {
            basket.goods[1].amount = numberItem;
            basket.countBasketPrice();
        }

        if (e.target.classList.contains('counter_plus_2')) {
            basket.goods[2].amount = numberItem;
            basket.countBasketPrice();
        }
    }
});

for (let totalProductPositions = 0; totalProductPositions < basket.goods.length; totalProductPositions++) {
    let item = document.querySelectorAll('.counter_plus');

    item[totalProductPositions].classList.add('counter_plus_' + totalProductPositions);
}


window.addEventListener('click', (e) => {
    if (e.target.dataset.action === 'plus') {
        const card = e.target.closest('.counter_wrapper');
        const productInfo = {
            id: card.dataset.id,
            title: card.querySelector('.item_title').innerText,
            amount: card.querySelector('[data-counter]').innerText,
            price: card.querySelector('.item_price').innerText,
        };

        const cartWrapper = document.querySelector('.cart__wrapper');
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

        if (itemInCart) {
            const counterElement = itemInCart.querySelector('[data-counter]');
            const itemAmount = document.querySelector('.counter_plus');
            counterElement.innerText = productInfo.amount;
        } else {
            const cartItemHTML = `
            <div class="counter_wrapper" data-id="${productInfo.id}">
                <div class="item_title">${productInfo.title}</div>
                <div class="item_price">${productInfo.price}</div>
                <div class="item_amount" data-counter>${productInfo.amount}</div>
                <div class="addToBasket__btn" data-cart>Купить</div>
            </div>
            `;

            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        };
    }

    if (e.target.hasAttribute('data-reset')) {

        const cart = document.querySelector('.cart__wrapper');
        cart.innerHTML = '';
        basket.goods[0].amount = 0;
        basket.goods[1].amount = 0;
        basket.goods[2].amount = 0;
        basket.countBasketPrice();

    }
});





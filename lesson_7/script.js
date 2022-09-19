/* 1. Реализовать страницу корзины:
a. Добавить возможность не только смотреть состав корзины, но и редактировать его,
обновляя общую стоимость или выводя сообщение «Корзина пуста».
2. На странице корзины:
a. Сделать отдельные блоки «Состав корзины», «Адрес доставки», «Комментарий»;
b. Сделать эти поля сворачиваемыми;
c. Заполнять поля по очереди, то есть давать посмотреть состав корзины, внизу которого
есть кнопка «Далее». Если нажать ее, сворачивается «Состав корзины» и открывается
«Адрес доставки» и так далее.

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
                <div class="counter_plus" data-action="plus_cart">Купить</div>
            </div>
            `;

            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

        };
    }

    if (e.target.hasAttribute('data-reset')) {

        let itemAmount = document.querySelectorAll('.item_amount');
        const cart = document.querySelector('.cart__wrapper');
        cart.innerHTML = '';
        basket.goods[0].amount = 0;
        basket.goods[1].amount = 0;
        basket.goods[2].amount = 0;
        itemAmount.forEach((item) => {
            item.innerText = 0;
        });
        basket.countBasketPrice();
        console.log(itemAmount);
    }
});


window.addEventListener('click', function (e) {

    let counter;
    let numberItem;

    if (e.target.dataset.action === 'plus_cart') {
        const counterWrapper = e.target.closest('.counter_wrapper');
        counter = counterWrapper.querySelector('[data-counter]');
        counter.innerText = ++counter.innerText;
        basket.goods.amount = counter.innerText;
        counter.innerText = basket.goods.amount;
        numberItem = counter.innerText;

        if (e.target.closest('[data-id="01"]')) {
            basket.goods[0].amount = numberItem;
            basket.countBasketPrice();
        }

        if (e.target.closest('[data-id="02"]')) {
            basket.goods[1].amount = numberItem;
            basket.countBasketPrice();
        }

        if (e.target.closest('[data-id="03"]')) {
            basket.goods[2].amount = numberItem;
            basket.countBasketPrice();
        }
    }
});



// 2)

window.addEventListener('click', (e) => {
    const nextBlockBtnBlock = document.querySelector('.nextBlock_wrapper');
    const nextBlockBtnBlock2 = document.querySelector('.nextBlock_wrapper_2');
    const counterPlus = document.querySelector('.counter_plus');
    if (e.target.dataset.action === 'plus') {
        nextBlockBtnBlock.style.display = 'block';
        nextBlockBtnBlock2.style.display = 'none';
    }

    if (e.target.dataset.action === 'next') {
        const openBtn = document.querySelector('.cartGoods');
        const base = document.querySelector('.cart__wrapper');
        base.style.display = "none";
        openBtn.innerHTML = "Состав корзины";

        const base1 = document.querySelector('.cart_blockChange')
        const div = document.createElement('div');
        div.classList.add('cartGoods_div');
        base1.append(div);
        const cartItemHTML = `
        <form class="sendAMessage__leftBlock_form">
            <div class="sendAMessage__leftBlock_email">Введите адрес доставки</div>
            <input class="sendAMessage__input_email" name="text">
            <button class="sendAMessage__leftBlock_btn">Далее</button>
        </form>
                `;

        div.insertAdjacentHTML('beforeend', cartItemHTML);

        function readMore() {
            const openBtn = document.querySelector('.deliveryAddress');
            const base = document.querySelector('.sendAMessage__leftBlock_form');

            base.style.display = "inline";
            openBtn.innerHTML = "Скрыть блок адреса доставки";
        }
        readMore();

        nextBlockBtnBlock.style.display = 'none';
        nextBlockBtnBlock2.style.display = 'block';

        if (nextBlockBtnBlock2.style.display = 'block') {
            nextBlockBtnBlock.style.display = 'none';
        }
    }
});


window.addEventListener('click', (e) => {
    const lastBtn = document.querySelector('.deliveryAddress');

    const nextBlockBtnBlock = document.querySelector('.nextBlock_wrapper_2');
    if (e.target.dataset.action === 'next_2') {

        function readMore1() {
            const openBtn = document.querySelector('.comments');
            const base = document.querySelector('.sendAMessage__leftBlock_form');

            base.style.display = "none";
            openBtn.innerHTML = "Скрыть блок";
        }
        readMore1();

        const base = document.querySelector('.cart_blockChange')
        const div = document.createElement('div');
        div.classList.add('cartGoods_div');
        base.append(div);
        const cartItemHTML = `
        <form class="sendAMessage__leftBlock_form_comments">
            <div class="sendAMessage__leftBlock_message">Оставьте свой комментарий</div>
            <textarea class="sendAMessage__input_text" name="text"></textarea>
            <button class="sendAMessage__leftBlock_btn">Отправить</button>
        </form>
                `;

        div.insertAdjacentHTML('beforeend', cartItemHTML);

        lastBtn.innerHTML = "Адрес доставки"

        function readMore() {
            const openBtn = document.querySelector('.comments');
            const base = document.querySelector('.sendAMessage__leftBlock_form_comments');

            base.style.display = "inline";
            openBtn.innerHTML = "Скрыть блок комментарий";
        }
        readMore();
    }
});


document.querySelector('.cartGoods').onclick = function openCartGoods() {
    const cartWrapper = document.querySelector('.cart__wrapper');

    function readMore() {
        const openBtn = document.querySelector('.cartGoods');
        const base = document.querySelector('.cart__wrapper');

        if (base.style.display === "none") {
            base.style.display = "flex";
            openBtn.innerHTML = "Скрыть блок корзины";

        } else if (base.style.display === "inline") {
            base.style.display = "none";
            openBtn.innerHTML = "Состав корзины";

        } else {
            base.style.display = "none";
            openBtn.innerHTML = "Состав корзины";
        }
    }

    readMore();
};


document.querySelector('.deliveryAddress').onclick = function openDeliveryAddress() {
    const base = document.querySelector('.cart__wrapper')
    const div = document.createElement('div');
    div.classList.add('cartGoods_div');
    base.append(div);
    const cartItemHTML = `
    <form class="sendAMessage__leftBlock_form">
        <div class="sendAMessage__leftBlock_email">Введите адрес доставки</div>
        <input class="sendAMessage__input_email" name="text">
        <button class="sendAMessage__leftBlock_btn">Далее</button>
    </form>
            `;

    div.insertAdjacentHTML('beforeend', cartItemHTML);

    function readMore() {
        const openBtn = document.querySelector('.deliveryAddress');
        const base = document.querySelector('.sendAMessage__leftBlock_form');

        if (base.style.display === "none") {
            base.style.display = "inline";
            openBtn.innerHTML = "Скрыть блок адреса доставки";
        } else if (base.style.display === "inline") {
            base.style.display = "none";
            openBtn.innerHTML = "Адрес доставки";
        } else {
            base.style.display = "inline";
            openBtn.innerHTML = "Скрыть блок адреса доставки";
        }
    }

    readMore();
};


document.querySelector('.comments').onclick = function openComments() {
    const base = document.querySelector('.cart__wrapper')
    const div = document.createElement('div');
    div.classList.add('cartGoods_div');
    base.append(div);
    const cartItemHTML = `
    <form class="sendAMessage__leftBlock_form_comments">
        <div class="sendAMessage__leftBlock_message">Оставьте свой комментарий</div>
        <textarea class="sendAMessage__input_text" name="text"></textarea>
        <button class="sendAMessage__leftBlock_btn">Отправить</button>
    </form>
            `;

    div.insertAdjacentHTML('beforeend', cartItemHTML);

    function readMore() {
        const openBtn = document.querySelector('.comments');
        const base = document.querySelector('.sendAMessage__leftBlock_form_comments');

        if (base.style.display === "none") {
            base.style.display = "inline";
            openBtn.innerHTML = "Скрыть блок комментарий";
        } else if (base.style.display === "inline") {
            base.style.display = "none";
            openBtn.innerHTML = "Комментарий";
        } else {
            base.style.display = "inline";
            openBtn.innerHTML = "Скрыть блок комментарий";
        }
    }

    readMore();
};





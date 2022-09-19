/* 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны
нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.

2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в
HTML-структуре. Там должен быть только div, в который будет вставляться корзина,
сгенерированная на базе JS:
a. Пустая корзина должна выводить строку «Корзина пуста»;
b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей». */


// Решение:

// 1)

'use strict';


function createChessBoard() {

    let container = document.querySelector('.container');
    let block;
    let validate = true;

    let limit = 8;
    for (let i = 0; i < limit; i++) {
        for (let j = 0; j < limit; j++) {
            if (j == 0) validate = !validate;

            block = document.createElement('div');

            if (validate) block.className = 'block black';
            else block.className = 'block white';

            container.appendChild(block);
            validate = !validate;
        }
    }

    function topRow() {
        let limit = 8;
        for (let i = 1; i <= limit; i++) {

            let block = document.createElement('div');
            let topRow = document.querySelector('.topRow');

            block.className = 'block';
            topRow.appendChild(block);

            block.textContent = i;
        }
    }
    topRow();

    function leftRow() {
        let limit = 8;
        for (let i = 1; i <= limit; i++) {

            if (i == 1) i = 'A';
            if (i == 2) i = 'B';
            if (i == 3) i = 'C';
            if (i == 4) i = 'D';
            if (i == 5) i = 'E';
            if (i == 6) i = 'F';
            if (i == 7) i = 'G';
            if (i == 8) i = 'H';

            let block = document.createElement('div');
            let topRow = document.querySelector('.leftRow');

            block.className = 'block';
            topRow.appendChild(block);
            block.textContent += i;

            if (i == 'A') i = 1;
            if (i == 'B') i = 2;
            if (i == 'C') i = 3;
            if (i == 'D') i = 4;
            if (i == 'E') i = 5;
            if (i == 'F') i = 6;
            if (i == 'G') i = 7;
            if (i == 'H') i = 8;
        }
    }
    leftRow();
}

createChessBoard();



// 2)


const basket = {

    goods: [
        { name: 'pencils', amount: 2, price: 20 },
        { name: 'notebooks', amount: 0, price: 30 },
        { name: 'rulers', amount: 2, price: 15 }
    ],

    countBasketPrice() {

        let summPriceAllGoods = 0;
        let countAllGoods = 0;

        for (let i = 0; i < this.goods.length; i++) {
            summPriceAllGoods += this.goods[i].amount * this.goods[i].price;
        }

        for (let j = 0; j < this.goods.length; j++) {
            countAllGoods += this.goods[j].amount;
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

let basketLine = document.querySelector('.basket');
let bscketText = document.createElement('p')
basketLine.appendChild(bscketText);
bscketText.className = 'bscketText';

console.log(basket.countBasketPrice());





/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

2. С этого урока начинаем работать с функционалом интернет - магазина.Предположим, есть
сущность корзины.Нужно реализовать функционал подсчета стоимости корзины в
зависимости от находящихся в ней товаров.

3. Товары в корзине хранятся в массиве.Задачи:
a.Организовать такой массив для хранения товаров в корзине;
b.Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.

5. * Нарисовать пирамиду с 20 рядами с помощью console.log */



// Решение:

// 1)

"use strict";

let i = 2;

while (i <= 100) {
    let check = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(i);
    i++;
}



// 2)

const basket = [
    ['pencils', 1, 20],
    ['notebooks', 1, 30],
    ['rulers', 1, 15],
]



// 3)

function countBasketPrice(goods) {
    let startBasketPrice;

    switch (goods) {
        case 'pencils':
            startBasketPrice = basket[0][1] * basket[0][2];
            return startBasketPrice;
        case 'notebooks':
            startBasketPrice = basket[1][1] * basket[1][2];
            return startBasketPrice;
        case 'rulers':
            startBasketPrice = basket[2][1] * basket[2][2];
            return startBasketPrice;
    }
}
console.log(countBasketPrice('notebooks'));



// 4)

for (let i = 0; i <= 9; console.log(i++)) { }


// 5)

for (let i = 1, pyramid = ""; i <= 20; i++) {
    pyramid += "x";
    console.log(pyramid);
}




/* 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999,
надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы,
десятки и сотни. Например, для числа 245 надо получить следующий объект: {‘единицы’: 5,
‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее
сообщение с помощью console.log и вернуть пустой объект.
2. Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */


// Решение:

// 1)

'use strict';

function convertNumInObj() {
    let inputNum = prompt('Введите число от 0 до 999 для преобразования в объект', '');
    let arrNum = inputNum.split('');

    while (arrNum.length < 3) {
        arrNum.unshift(0);
    }

    let objNum = {};
    objNum['единицы'] = +arrNum[2];
    objNum['десятки'] = +arrNum[1];
    objNum['сотни'] = +arrNum[0];

    if (arrNum.length == 3) {
        return objNum;
    }
    else if (arrNum.length > 3) {
        delete objNum.единицы;
        delete objNum.десятки;
        delete objNum.сотни;
        console.log('Вы ввели слишком большое значение');
        return objNum;
    }
}

console.log(convertNumInObj());



// 2)

const basket = {
    goods: [
        { name: 'pencils', amount: 1, price: 20 },
        { name: 'notebooks', amount: 1, price: 30 },
        { name: 'rulers', amount: 1, price: 15 }
    ],

    countBasketPrice(goods) {

        let startBasketPrice;

        switch (goods) {
            case 'pencils':
                startBasketPrice = basket.goods[0].amount * basket.goods[0].price;
                return startBasketPrice;
            case 'notebooks':
                startBasketPrice = basket.goods[1].amount * basket.goods[1].price;
                return startBasketPrice;
            case 'rulers':
                startBasketPrice = basket.goods[2].amount * basket.goods[2].price;
                return startBasketPrice;
        }
    }
};

console.log(basket.countBasketPrice('notebooks'));


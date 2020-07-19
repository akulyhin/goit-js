"use strict";

let credits = 23580;

const pricePerDroid = 3000;

let qtDroid = prompt('Какое количество дроидов Вы хотите приобрести?');

console.log(qtDroid);

if(qtDroid === null) {
    console.log('Отменено пользователем!');
    alert('Отменено пользователем!');
}

else if (qtDroid === '') {
    console.log('Вы не ввели значение');
    alert('Вы не ввели значение, пожалуйста введите!');
}

else {
    qtDroid = Number(qtDroid);
    let totalPrice =  qtDroid * pricePerDroid;

    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!');
        alert('Недостаточно средств на счету!');
    }
    else {
        credits += - totalPrice;
        console.log(`Вы купили ${qtDroid} дроида(ов), на счету осталось ${credits} кредитов`);
        alert(`Вы купили ${qtDroid} дроида(ов), на счету осталось ${credits} кредитов`);
    }
}
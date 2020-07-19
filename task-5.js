"use strict";

let country = prompt('В какую страну доставка Вас интересует?');
let price;

country = country.toLowerCase();

switch (country) {
    case "китай":
    price = 100;
    break;

    case "чили":
    price = 250;
    break;

    case "австралия":
    price = 170;
    break;

    case "индия":
    price = 80;
    break;

    case "ямайка":
    price = 120;
    break;

    default:
        alert('В вашей стране доставка не доступна');
}

alert(`Доставка в ${country} будет стоить ${price} кредитов`);
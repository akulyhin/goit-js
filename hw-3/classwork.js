'use strict';


const newObject = {
    name: "Sandra",
    age: "30",
    
toShowName() {
    return this.name;
    },
};
console.log(newObject);

// обращение к свойствам объекта
console.log(newObject.name, newObject.age);
console.log(newObject['age']);

// вызов метода объекта
console.log(newObject.toShowName());

// изменение значения свойства объекта
newObject.name = 'Aleksandra';
console.log(newObject);

// добавление новых свойств
newObject.films = [];
console.log(newObject);

// Удаление свойств
delete newObject.films;
console.log(newObject);

// short props

const email = 'aaaa@gmail.com';

const gameUser = {
    name: 'Sonya',
    score: 100,
    // email: email,   // ES5
    email,   // ES6
};
console.log(gameUser);

// перебор объекта
for (let key in gameUser) {
    console.log("gameUser: ", key);
}

for (let key in newObject) {
    console.log("newObject: ", key);
}

// Способы преоброзования данных объекта в массив
const studentsScore = {
    Vasya: 14,
    Petya: 22,
    Ksenya: 45,
    Alena: 24,
    Andrey: 5
}

const keys = Object.keys(studentsScore);
console.log(keys);

const values = Object.values(studentsScore);
console.log(values);

const entries = Object.entries(studentsScore);
console.log(entries);


for (let el of entries) {
    // console.log(`${el[0]}: ${el[1]}`);
}

let topScore = 0;
let winner;

for (let i = 0; i < entries.length; i++) {
    // console.log(`${entries[i][0]}: ${entries[i][1]}`);

    if (entries[i][1] > topScore) {
        topScore = entries[i][1];
        // console.log(entries[i][0], topScore);
        winner = entries[i][0] +' ' + topScore;
    }
}

console.log(topScore);
console.log(winner);


// SPREAD - распыление
// with arrays
console.log(Math.min(1, 2, 3, 4))
console.log(Math.max(...values));

let newKeysArray = keys.slice();
console.log(newKeysArray);

const spreadKeys = [...keys];
console.log(spreadKeys);

const keyAndVals = [...keys.slice(0, 1), "JS", ...keys.slice(1), ...values];
console.log(keyAndVals);


// with Objects
const fruits = {
    fruitName: 'fruits',
    fruitCount: 22,
};

const vegs = {
    vegsName: 'vegetables',
    vegsCount: 24,
};

// old
const prods = Object.assign({}, fruits, vegs);
console.log("prods", prods);

// const prods {
//     name: "",
//     const: ,
// }

// spread
const spreadSprods = {...fruits, a: 2, ...vegs};
console.log("spread", spreadSprods);

// REST - сбор
const db = [];
const scores = [];
function restArgs(email, ...args) {
    db.push(email);
    let total = 0;
    for(let el of args) {
        total += el;
        scores.push(el);
    }
    console.log(total);
}

restArgs("aaa@gmail.com", 1, 2, 3);
console.log(db);
console.log(scores);


// деструктуризация объектов
const destruct = {
    login: "login",
    pass: "javascript",
    obj: {
        key1: 1,
        key2: {
            key3: 3,
            key4: 4
        }
    }
};

console.log(destruct.login);
console.log(destruct.obj.key1);
console.log(destruct.obj.key2.key3);


const {login, pass, obj} = destruct;
console.log(login);
console.log(obj);


// Дестру-я массивов
const black = [1, 2, 3];

const [red, green, blue] = black;
console.log(red);
console.log(green);
console.log(blue);


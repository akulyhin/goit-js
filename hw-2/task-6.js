let input;
const numbers = [];
let total = 0;

// input = prompt();

while (input !== null) {
    input = prompt('Введите число');
    console.log(input);
    
    if (isNaN(input)) {
        alert('Было введено не число');
        continue;
    };

    numbers.push(Number(input));
    console.log(numbers);
}

if (numbers.length > 0) {
    for (let num of numbers) {
        total += num;
    }
    console.log(total);
}




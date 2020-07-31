

const numbers = [1, 2, 3, 4, 5, 6, 7];

const numb = function(array) {
    
    console.log(array.length);

    let ar1 = [];
    let ar2 = [];

    for (let i = 0; i < array.length; i += 1) {
        console.log(i);
        let lm = array[i]; 
        console.log('Текущий элемент: ', lm);

        if (lm%2 === 0) {
            ar1.push(lm);
        }

        else {
            ar2.push(lm);
        }
    }

    console.log(ar1);
    console.log(ar2);
};


numb(numbers);
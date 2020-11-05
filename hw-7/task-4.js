const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');

const value = document.querySelector('#value');

let counterValue = +value.value;

decrement.addEventListener('click', () => {
    counterValue -= 1;
    value.value = counterValue;
})

increment.addEventListener('click', () => {
    counterValue += 1;
    value.value = counterValue;
})
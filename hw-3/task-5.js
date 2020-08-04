const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2},
  ];
   
  const getAllPropValues = function(arr, prop) {
    
    const result = [];

    for (let el of arr) {
        const keys = Object.keys(el);

        const values = Object.values(el);

        for (let elem of keys) {
            if (elem === prop) {
                let currentKey = elem;
                result.push(el[currentKey]);
            }
        }
    }
    return result;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

  console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

  console.log(getAllPropValues(products, 'category')); // []
  
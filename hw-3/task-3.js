const findBestEmployee = function(employees) {
    let winner;
    let topScore = 0;

    const entries = Object.entries(employees);
    // console.log(entries);

    for (let i = 0; i < entries.length; i++) {
        if (entries[i][1] > topScore) {
            topScore = entries[i][1];
            winner = entries[i][0];
        }
    }
    return winner;
  };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux
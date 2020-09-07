const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsList = document.querySelector('#ingredients');

    for (let el of ingredients) {
          const ingredientsItem = document.createElement('li');
          ingredientsItem.append(el);
          ingredientsList.append(ingredientsItem);
      }

      console.log(ingredientsList);
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const liArrayRef = ingredients.map(el => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = el;
  return ingredientsItem;
})

ingredientsList.append(...liArrayRef);
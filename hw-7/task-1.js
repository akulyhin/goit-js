const categories = document.querySelectorAll('#categories .item');
console.log(`В списке ${categories.length} категории`);

categories.forEach(element => {
    console.log(`Категория: ${element.children[0].innerText}`);
    console.log(`Количество элементов: ${element.children[1].children.length}`);
});
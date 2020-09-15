class Storage  {
    constructor(array) {
        this.items = array;
    }
 
    getItems() {
        return this.items;
      }


      addItem(item) {
        this.items.push(item);
      }
      removeItem(item) {
        let ind = this.items.findIndex((obj) => {
          return obj === item;
        });
        if (ind !== -1) {
          this.items.splice(ind, 1);
        }
      }
    }

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
  
  storage.addItem('Дроид');
  console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
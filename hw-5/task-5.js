class Car {
    static getSpecs(car) {
        console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
    }
    constructor({maxSpeed, price}) {
        this.speed = 0;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }
    get price() {
        return this._price;
    }

    set price(value) {
        return this._price = value;
    }

    turnOn() {
        return this.isOn = true;
    }

    turnOff() {
        return this.isOn = false, this.speed = 0;
    }

    accelerate(value) {
        if (this.speed+value <= this.maxSpeed) 
            return this.speed += value;
    }

    decelerate(value) {
        if (this.speed + value >= 0) return this.speed -= value;
    }

    drive(hours) {
        if (this.isOn = true) {this.distance += hours * this.speed;}
    }
}

    /*
     * Отнимает от свойства speed полученное значение,
     * при условии что результирующая скорость не меньше нуля
     */
  
    /*
     * Добавляет в поле distance киллометраж (hours * speed),
     * но только в том случае если машина заведена!
     */
    

  
  const mustang = new Car({ maxSpeed: 200, price: 2000 });
  
  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
  
  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();
  
  Car.getSpecs(mustang);
  // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000
  
  console.log(mustang.price); // 2000
  mustang.price = 4000;
  console.log(mustang.price); // 4000
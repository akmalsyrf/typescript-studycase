"use strict";
class Vehicle {
    start() {
        console.log("brumm");
    }
}
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motorcycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
console.log(car.wheels);
car.start();
let motorcycle = new Motorcycle();
console.log(motorcycle.wheels);
motorcycle.start();

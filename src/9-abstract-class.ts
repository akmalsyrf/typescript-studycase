abstract class Vehicle {
  abstract wheels: number; //kita belum tahu rodanya berapa, jadi abstract ini dibuat untuk child class
  start(): void {
    console.log("brumm");
  }
}

class Car extends Vehicle {
  wheels: number = 4;
}
class Motorcycle extends Vehicle {
  wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.start();

let motorcycle = new Motorcycle();
console.log(motorcycle.wheels);
motorcycle.start();

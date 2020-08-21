class Car {
  // Write code under this line
  static getSpecs(car) {
    return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`;
  }
  constructor(car) {
    this.maxSpeed = car.maxSpeed;
  }
  //   get price() {}
  //   set price(value) {}
  //   turnOn() {}
  //   turnOff() {}
  //   accelerate(value) {}
  //   decelerate(value) {}
  //   drive(hours) {}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
// const mustang = new Car({ maxSpeed: 200 });
// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

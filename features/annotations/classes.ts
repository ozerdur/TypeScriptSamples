class Vehicle {
  //color: string;
  length: number = 20; //needs to initialize because not set in constructor

  constructor(public color: string) {
    // this.color = color;
  }
  drive(): void {
    console.log('chugga chugga');
  }

  public honk(): void {
    console.log('beep');
  }

}

const vehicle = new Vehicle('red');
vehicle.drive();
vehicle.honk();


class Car2 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  drive(): void {
    console.log('vroom');
  }
}


const car2 = new Car2(4, 'red');
car2.drive();
car2.honk();
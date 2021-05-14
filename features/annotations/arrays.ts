const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
  ['f150'],
  ['corolla'],
  ['camarro']
];

//Help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatibel values
//carMakers.push(100);

//Help with 'map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2040-10-10'];



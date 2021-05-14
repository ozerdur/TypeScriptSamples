const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};


const printVehicle = (vehicle: { name: string; year: number; broken: boolean; }): void{
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
}

interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}


const printVehicleWithInterface = (vehicle: Vehicle): void{
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
}


printVehicleWithInterface(oldCivic);
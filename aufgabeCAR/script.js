// Base class for a general car
class Car {
  // Constructor to initialize car properties
  constructor(brand, model, yearOfManufacture, seats = 5) {
    this.brand = brand; // Car brand
    this.model = model; // Car model
    this.yearOfManufacture = yearOfManufacture; // Year of manufacture
    this.seats = seats; // Number of seats, default is 5
  }

  // Method to get a description of the car
  getDescription() {
    document.write("Brand: " + this.brand + "<br>");
    document.write("Model: " + this.model + "<br>");
    document.write("Year of Manufacture: " + this.yearOfManufacture + "<br>");
    document.write("Seats: " + this.seats + "<br>");
  }
}

// Derived class for an electric car
class ElectricCar extends Car {
  // Constructor to initialize electric car properties
  constructor(brand, model, yearOfManufacture, seats, batteryRange) {
    super(brand, model, yearOfManufacture, seats); // Call to the parent constructor
    this.batteryRange = batteryRange; // Battery range in kilometers
  }

  // Method to get a description of the electric car, including battery range
  getDescription() {
    super.getDescription(); // Call to the parent method
    document.write("Battery Range: " + this.batteryRange + "<br>");
  }
}

// Create a new electric car instance
let car1 = new ElectricCar("Nissan", "M1312", "2022", 4, 500);
// Display the description of the electric car
car1.getDescription();

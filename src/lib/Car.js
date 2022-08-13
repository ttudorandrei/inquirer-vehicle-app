const Vehicle = require("./Vehicle");

class Car extends Vehicle {
  constructor(model, noOfWheels, seats) {
    super(model, noOfWheels);
    this.seats = seats;
  }

  getSeats() {
    return this.seats;
  }
}

module.exports = Car;

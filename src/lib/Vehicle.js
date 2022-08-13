class Vehicle {
  constructor(model, noOfWheels) {
    this.brand = "Mercedes";
    this.model = model;
    this.noOfWheels = noOfWheels;
  }

  getBrand() {
    return this.brand;
  }

  getModel() {
    return this.model;
  }

  getNoOfWheels() {
    return this.noOfWheels;
  }
}

module.exports = Vehicle;

const Vehicle = require("./Vehicle");

class Truck extends Vehicle {
  constructor(model, noOfWheels, maximumLoad) {
    super(model, noOfWheels);
    this.maximumLoad = maximumLoad;
  }

  getMaximumLoad() {
    return this.maximumLoad;
  }
}
module.exports = Truck;

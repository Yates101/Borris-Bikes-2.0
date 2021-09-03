let Bike = require('../Bike/index');

class DockingStation {
  constructor(bikes = 0) {
    this.bikes = [bikes];
  }

  releaseBike() {
    return new Bike();
  }
}

module.exports = DockingStation;
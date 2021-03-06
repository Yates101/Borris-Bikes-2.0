let Bike = require('../Bike/index');

class DockingStation {
  constructor(bikes = 0) {
    this.bikes = [bikes];
  }

  releaseBike() {
    return new Bike();
  }

  dockBike(bike) {
    if (this.bikes.push(bike)) {
      return true;
    } else { return false }
  }

  showBikes() {
    return this.bikes;
  }
}

module.exports = DockingStation;
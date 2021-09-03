const DockingStation = require('./index')
const Bike = require('../Bike/index');

let station = new DockingStation();

test('docking station can release bikes', () => {
  expect(station.releaseBike()).toEqual(expect.any(Bike));
})

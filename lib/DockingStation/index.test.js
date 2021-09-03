const DockingStation = require('./index')
const Bike = require('../Bike/index');
jest.mock('../Bike/index');

let station = new DockingStation();

beforeEach(() => {
  Bike.mockClear();
})

test('should release bikes', () => {
  expect(station.releaseBike()).toEqual(expect.any(Bike));
})

test('should dock bikes', () => {
  expect(station.dockBike(Bike)).toBeTruthy();
})

test('should display bikes docked', () => {
  station.dockBike(Bike);
  expect(station.showBikes()).toContain(Bike);
})

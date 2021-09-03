const Bike = require('./index');

let bike = new Bike();

test('should respond to isWorking', () => {
  expect(bike.isWorking()).toEqual(true);
})

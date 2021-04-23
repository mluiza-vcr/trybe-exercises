const { TestScheduler } = require('jest');
const ex1 = require('../src/ex1');

test('teste da função showRandomNumber', () => {
  ex1.showRandomNumber = jest
  .fn()
  .mockReturnValue(10);
  expect(ex1.showRandomNumber()).toBe(10);
  expect(ex1.showRandomNumber).toHaveBeenCalled();
  expect(ex1.showRandomNumber).toHaveBeenCalledTimes(1);
});


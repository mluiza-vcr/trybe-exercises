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

test('test division of function randomNumber', () => {
  ex1.showRandomNumber = jest
    .fn()
    .mockImplementation((a, b) => a / b);
  expect(ex1.showRandomNumber(15, 3)).toBe(5);
  expect(ex1.showRandomNumber).toHaveBeenCalledTimes(1);
});

test('test implementation randomNumber', () => {
  const spyRandom = jest
    .spyOn(ex1, 'showRandomNumber')
    .mockImplementation((a, b, c) => a * b * c);
  expect(spyRandom(2, 2, 3)).toBe(12);
  ex1.showRandomNumber.mockReset();
  ex1.showRandomNumber = jest
    .fn()
    .mockImplementation((a) => a * 2);
  expect(ex1.showRandomNumber(100)).toBe(200);
});
const { TestScheduler } = require("jest");
const sum = require('../src/ex1');

describe('teste exercícios da função sum', () => {
  
  test('sums 4 plus 5', () => {
    expect(sum(4, 5)).toBe(9);
  });

  test('sums 0 plus 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('sum throw error when calls string', () => {
    expect(() => sum(4, "5")).toThrow();
  });

  test('testar se mensagem de erro é: parameters must be numbers', () => {
    expect(() => sum(4, "5")).toThrowError(new Error ('parameters must be numbers'))
  });

});
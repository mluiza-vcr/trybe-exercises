const { TestScheduler } = require('jest');
const ex5 = require('../src/ex1');

describe('test showString original implementation', () => {
  test('test function showString', () => {
    const spyShowString = jest
      .spyOn(ex5, 'showString')
      .mockImplementation((str) => str.toLowerCase());
    expect(spyShowString('AMANHÃ')).toBe('amanhã');
    ex5.showString.mockRestore();
    expect(ex5.showString('pikachu')).toBe('PIKACHU');
  });
});
const { TestScheduler } = require("jest");
const { findUserById, getUserName } = require('../src/ex2');

describe('testa resultados da função getUserName quando usuário é encontrado e quando não é', () => {
  test('testa resultado da função quando usuário é encontrado', () => {
    expect.assertions(1);
    return getUserName(4).then((userName) => {
      expect(userName).toBe('Mark');
    });
  });
  test('testa resultado da função getUserName quando usuário não é encontrado', () => {
    expect.assertions(1);
    return getUserName(3).catch((response) => {
      const object = { error: 'User with 3 not found.' }
      expect(response).toEqual(object);
    });
  });
});

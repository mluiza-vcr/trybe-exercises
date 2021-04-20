const { TestScheduler } = require("jest");
const { findUserById, getUserName } = require('../src/ex2');

// describe('testa resultados da função getUserName quando usuário é encontrado e quando não é', () => {
//   test('testa resultado da função quando usuário é encontrado', () => {
//     expect.assertions(1);
//     return getUserName(4).then((userName) => {
//       expect(userName).toBe('Mark');
//     });
//   });
//   test('testa resultado da função getUserName quando usuário não é encontrado', () => {
//     expect.assertions(1);
//     return getUserName(3).catch((response) => {
//       const object = { error: 'User with 3 not found.' }
//       expect(response).toEqual(object);
//     });
//   });
// });

describe('testa resultados da função getUserName em caso de usuário encontrado ou não', () => {
  test('testa resultado da função quando usuário é encontrado', async () => {
    const response = await getUserName(4);
    expect.assertions(1);
    expect(response).toEqual('Mark');
  });
  test('testa resultado quando usuário não é encontrado', async () => {
    expect.assertions(1);
    try {
      await getUserName(3);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 3 not found.' });
    }
  });
});

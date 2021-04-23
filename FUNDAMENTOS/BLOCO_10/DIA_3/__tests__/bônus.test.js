const { TestScheduler } = require('jest');
const bonus = require('../src/bônus');

describe('testa a função fetchJoke', () => {
  const object =
  {
    'id': '7h3oGtrOfxc',
    'joke': 'Whiteboards ... are remarkable.',
    'status': 200
  }

  bonus.fetchJoke = jest
    .fn()
    .mockResolvedValue(object);

  test('testa retorna objeto', async () => {
    return bonus.fetchJoke().then((response) => {
      expect(response.joke).toEqual('Whiteboards ... are remarkable.');
    })
  });
});
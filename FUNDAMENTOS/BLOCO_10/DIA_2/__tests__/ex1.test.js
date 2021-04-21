const { TestScheduler } = require("jest");
const uppercase = require('../src/ex1');

test('verifica chamada do callback', (done) => {
  uppercase('trybe', (callback) => {
    expect(callback).toBe('TRYBE');
    done();
  });
});


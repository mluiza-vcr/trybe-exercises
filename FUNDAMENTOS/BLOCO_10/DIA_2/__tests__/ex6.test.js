const { TestScheduler } = require("jest");
const { getAnimal, getAnimal2 } = require('../src/ex6');

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', async () => {
      expect.assertions(1);
      try {
        await getAnimal('Bob');
      } catch (error) {
        expect(error).toEqual('Nenhum animal com esse nome!');
      }
    });
  });
});

describe('Testando findAnimalByAge', () => {
  test('Quando existe o animal com a idade procurada', () => {
    expect.assertions(1);
    return getAnimal2(2).then(animal => {
      expect(animal).toEqual({ name: 'Soneca', age: 2, type: 'Dog' });
    });
  });

  test('Quando não existe o animal com a idade procurada', async () => {
    expect.assertions(1);
    try {
      await getAnimal2(4);
    } catch (error) {
      expect(error).toEqual('Nenhum animal com essa idade!');
    }
  });
});




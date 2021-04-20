const { TestScheduler } = require("jest");
const { encode , decode } = require('../src/encodeDecode');

describe('testes para funções encode e decode', () => {

  test('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  test('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });
  test('coverte a vogal "a" no número 1', () => {
    expect(encode('ana')).toBe('1n1');
  });
  test('converte a vogal "e" no número 2', () => {
    expect(encode('esse')).toBe('2ss2');
  });
  test('converte a vogal "i" no número 3', () => {
    expect(encode('xixi')).toBe('x3x3');
  });
  test('converte a vogal "o" no número 4', () => {
    expect(encode('coco')).toBe('c4c4');
  });
  test('converte a vogal "u" no número 5', () => {
    expect(encode('xuxu')).toBe('x5x5');
  });
  test('converte as vogais em números', () => {
    expect(encode('melodia')).toBe('m2l4d31');
  });
  test('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  test('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });
  test('converte o número 1 na vogal "a"', () => {
    expect(decode('1n1')).toBe('ana');
  });
  test('converte o número 2 na vogal "e"', () => {
    expect(decode('2ss2')).toBe('esse');
  });
  test('coverte o número 3 na vogal "i"', () => {
    expect(decode('x3x3')).toBe('xixi');
  });
  test('converte o número 4 na vogal "o"', () => {
    expect(decode('c4c4')).toBe('coco');
  });
  test('converte o número 5 na vogal "u"', () => {
    expect(decode('x5x5')).toBe('xuxu');
  });
  test('converte os números em vogais', () => {
    expect(decode('m2l4d31')).toBe('melodia');
  });
  test('testa se string passada tem mesmo número de caracteres do retorno', () => {
    expect(encode('melodia').length).toEqual(7);
  });
  test('testa se string passada tem mesmo número de caracteres do retorno', () => {
    expect(decode('m2l4d31').length).toEqual(7);
  });
});
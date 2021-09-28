const { expect } = require('chai');
const meuNumero = require('./exercicio1');

describe('Chama a função "meuNumero"', () => {
  describe('quando o número passado for maior que 0', () => {
    it('retorna "positivo"', () => {
      const mensagem = meuNumero(1);
      expect(mensagem).to.be.equals('positivo');
    });
    it('é uma string', () => {
      const mensagem = meuNumero(1);
      expect(mensagem).to.be.a('string');
    });
  });
  describe('quando o número passado por menor que 0', () => {
    it('retorna "negativo"', () => {
      const mensagem = meuNumero(-1);
      expect(mensagem).to.be.equals('negativo');
    });
    it('é uma string', () => {
      const mensagem = meuNumero(1);
      expect(mensagem).to.be.a('string');
    });
  });
  describe('quando o número passado é igual a 0', () => {
    it('retorna "neutro"', () => {
      const mensagem = meuNumero(0);
      expect(mensagem).to.be.equals('neutro');
    });
    it('é uma string', () => {
      const mensagem = meuNumero(1);
      expect(mensagem).to.be.a('string');
    });
  });
});
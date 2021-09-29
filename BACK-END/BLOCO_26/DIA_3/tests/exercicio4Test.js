const fs = require('fs');
const { expect } = require('chai');
const writeMyFile = require('../exercicio4');

describe('Chama a função "writeMyFile"', () => {
  describe('a resposta', () => {
    it('é uma string', () => {
      const resposta = writeMyFile('arquivo.txt', '#vqv conteúdo');
      expect(resposta).to.be.a('string');
    })
    it('é igual a "ok"', () => {
      const resposta = writeMyFile('arquivo.txt', '#vqv conteúdo')
      expect(resposta).to.be.equals('ok');
    })
  })
})
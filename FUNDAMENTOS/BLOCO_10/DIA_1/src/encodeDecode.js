function encode(str) {
  let string = str.split('');
  let consoantes = ['a', 'e', 'i', 'o', 'u'];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === consoantes[0]) {
      string[index] = '1';
    } else if (string[index] === consoantes[1]) {
      string[index] = '2';
    } else if (string[index] === consoantes[2]) {
      string[index] = '3';
    } else if (string[index] === consoantes[3]) {
      string[index] = '4';
    } else if (string[index] === consoantes[4]) {
      string[index] = '5';
    }
  }
  let concatenacao = string.join('');
  return concatenacao;
}

function decode(str) {
  let string = str.split('');
  let numeros = ['1', '2', '3', '4', '5'];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === numeros[0]) {
      string[index] = 'a';
    } else if (string[index] === numeros[1]) {
      string[index] = 'e';
    } else if (string[index] === numeros[2]) {
      string[index] = 'i';
    } else if (string[index] === numeros[3]) {
      string[index] = 'o';
    } else if (string[index] === numeros[4]) {
      string[index] = 'u';
    }
  }
  let concatenacao = string.join('');
  return concatenacao;
}

const functions = { encode, decode };
module.exports = functions;
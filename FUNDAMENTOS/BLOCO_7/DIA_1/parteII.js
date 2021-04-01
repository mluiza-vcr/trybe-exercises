// 1. Crie uma função que receba um número e retorne seu fatorial.

const fatorial = (n) => {
  let resultado = 1;
  for (let index = n; index > 0; index -= 1) {
    resultado = index * resultado
  }
  return resultado;
}

console.log(fatorial(10));

// 2. Crie uma função que receba uma frase e retorne qual a maior palavra.

const searchLongestWord = (sentence) => {
  let split = sentence.split(' ') // retorna array de strings
  let longestWord = split[0];
  
  for (let index = 0; index < split.length; index += 1) {
    if (split[index].length > longestWord.length) {
      longestWord = split[index]
    }
  }
  return longestWord;
}

console.log(searchLongestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));


//1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//Exemplo de palíndromo: arara .
//verificaPalindrome("arara") ;
//Retorno esperado: true
//verificaPalindrome("desenvolvimento") ;
//Retorno esperado: false


function verificaPalindromo (palavra){
  let palindromo = ""
  for (let index = palavra.length - 1; index >= 0; index -= 1){
    palindromo = palindromo + palavra[index]
  }
  if (palindromo === palavra){
    return true
  }
  else {
    return false
  }
}

console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo("arara"));
console.log(verificaPalindromo("babaca"));

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1]; .
//Valor esperado no retorno da função: 4 .

function retornaIndiceDoMaior (array) {
  let maior = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior){
      maior = array[index]
    }
  }
  return array.indexOf(maior);
}

console.log(retornaIndiceDoMaior([2, 3, 6, 7, 10, 1]));

// 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
//Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
//Valor esperado no retorno da função: 6 .

function retornaIndiceDoMenor (array) {
  let menor = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < menor){
      menor = array[index]
    }
  }
  return array.indexOf(menor);
}

console.log(retornaIndiceDoMenor([2, 4, 6, 7, 10, 0, -3]))

//4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//Valor esperado no retorno da função: Fernanda .

function maiorNome (nomes){
  let maiorNome = nomes[0];
  for (index = 0; index < nomes.length; index += 1){
    if (nomes[index].length > maiorNome.length) {
      maiorNome = nomes[index];
    }
  }
  return maiorNome;
}
 
console.log(maiorNome (["João", "Maria", "Manoela"]));

// 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
//Valor esperado no retorno da função: 2 .

function numeroQueMaisSeRepete (numeros) {
  let numero = 0;
  let maisRepete = 0;
  for (let i = 0; i < numeros.length; i += 1) {
    let repete = 0; 
    for (let j = i + 1; j < numeros.length; j += 1) {
      if(numeros[i]===numeros[j]) {
        numeros.splice(j,1)
        repete += 1
      }  
    }
    if (repete > maisRepete){
      maisRepete = repete
      numero = numeros[i]
    }
  }
  return numero
}

console.log(numeroQueMaisSeRepete([2, 3, 2, 5, 8, 2, 3]));

// 6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
//Valor de teste: N = 5 .
//Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

function somatoria (n) {
  let soma = 0;
  for (let index = 0; index <= n; index += 1){
    soma = soma + index
  }
  return soma
}

console.log(somatoria(5));

// 7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . 
//Considere que a string ending sempre será menor que a string word .
//Valor de teste: "trybe" e "be"
//Valor esperado no retorno da função: true
//verificaFimPalavra("trybe", "be")
//Retorno esperado: true
//verificaFimPalavra("joaofernando", "fernan") ;
//Retorno esperado: false

function verificaFinal (word, ending) {
  let i = word.length - ending.length
  let finalPalavra = '';
  for (let index = i; index < word.length; index += 1) {
    finalPalavra = finalPalavra + word[index]
  }
  if (finalPalavra === ending) {
    return true
  } else {
    return false
  }
}

console.log(verificaFinal("trybe" , "eb"));
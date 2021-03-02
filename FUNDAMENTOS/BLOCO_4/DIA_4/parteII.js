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
    console.log("true")
  }
  else {
    console.log("false")
  }
}

verificaPalindromo("ovo")
verificaPalindromo ("arara")
verificaPalindromo ("babaca")

// 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1]; .
//Valor esperado no retorno da função: 4 .

function retornaIndiceDoMaior (array) {
  let maior = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maior){
      maior = indexOf(array[index])
    }
  }
  console.log(maior)
}

retornaIndiceDoMaior ([2, 3, 6, 7, 10, 1]);
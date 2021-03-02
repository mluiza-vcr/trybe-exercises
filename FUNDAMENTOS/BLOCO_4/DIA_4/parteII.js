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
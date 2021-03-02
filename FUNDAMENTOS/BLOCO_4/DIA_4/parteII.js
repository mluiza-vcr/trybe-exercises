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
      maior = array[index]
    }
  }
  console.log(array.indexOf(maior))
}

retornaIndiceDoMaior ([2, 3, 6, 7, 10, 1]);

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
  console.log (array.indexOf(menor))
}

retornaIndiceDoMenor ([2, 4, 6, 7, 10, 0, -3])

//4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//Valor esperado no retorno da função: Fernanda .

function retornaMaiorNome (arrayDeNomes) {
  let maiorNome = "";
  for (let index = 0; index < arrayDeNomes.length; index += 1){
    if (arrayDeNomes[index].length > maiorNome) {
      maiorNome = arrayDeNomes[index]
    }
  }
console.log (maiorNome)
}

retornaMaiorNome (["João", "Maria", "Manoela"])
// PEDIR AJUDA AQUI!!!!!!!!!!!!! NÃO CONSEGUI FAZER O 4 E O 5

// 5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
//Valor esperado no retorno da função: 2 .

function numeroQueMaisSeRepete (arrayInteiros) {
  let 
}

// 6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
//Valor de teste: N = 5 .
//Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

function somatoria (n) {
  let soma = 0;
  for (let index = 0; index <= n; index += 1){
    soma = soma + index
  }
  console.log(soma)
}

somatoria(5)

// 7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . 
//Considere que a string ending sempre será menor que a string word .
//Valor de teste: "trybe" e "be"
//Valor esperado no retorno da função: true
//verificaFimPalavra("trybe", "be")
//Retorno esperado: true
//verificaFimPalavra("joaofernando", "fernan") ;
//Retorno esperado: false
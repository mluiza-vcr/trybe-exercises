//EXERCÍCIO 1
//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index = 0; index < numbers.length; index ++){
  console.log (numbers[index]);
}

//EXERCÍCIO 2
//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (index = 0; index < numbers.length; index ++){
  soma = soma + numbers[index]
}
console.log (soma)

//EXERCÍCIO 3
//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

let media = 0

for (index = 0; index < numbers.length; index ++){
  media = (soma / numbers.length)
}
console.log (media)

//EXERCÍCIO 4
//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: 
//"valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if (media > 20) {
  console.log ("valor maior que 20")
}
else {
  console.log ("valor menor ou igual a 20")
}

//EXERCÍCIO 5
//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0]

for (index = 0; index < numbers.length; index ++){
  if (numbers[index] > maior) {
    maior = numbers[index]
  }
}

console.log (maior)

//EXERCÍCIO 6 
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let quantidadeDeValoresImpares = 0

for (index = 0; index < numbers.length; index ++){
  if (numbers[index] % 2 != 0){
    quantidadeDeValoresImpares ++
  }
}

if (quantidadeDeValoresImpares > 0){
  console.log (quantidadeDeValoresImpares)
}
else {
  console.log ("nenhum valor ímpar encontrado")
}

//EXERCÍCIO 7
//Utilizando for, descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0]

for (index = 0; index < numbers.length; index ++){
  if (numbers[index] < menor)
  menor = numbers[index]
}

console.log(menor)

//EXERCÍCIO 8
//Utilizando for, crie uma array que vá de 1 até 25 e imprima o resultado;

let listaNova = [];

for (let index = 0; index < 25; index ++){
  listaNova[index] = index + 1
  listaNova.push(listaNova[index])
}

console.log(listaNova)

//EXERCÍCIO 9
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let resultadoDaDivisao = []

for (let indice = 0; indice < listaNova.length; indice++){
  resultadoDaDivisao.push(listaNova[indice]/2)
}

console.log(resultadoDaDivisao)
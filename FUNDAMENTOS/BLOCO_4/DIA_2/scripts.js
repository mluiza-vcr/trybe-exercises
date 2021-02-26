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

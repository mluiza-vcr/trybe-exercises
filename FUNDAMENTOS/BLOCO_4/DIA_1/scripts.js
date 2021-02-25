let a = 5;
let b = 4;

//Programa 1
let adicao = a + b;
console.log (adicao);

//Programa 2
let subtracao = a - b;
console.log (subtracao);

//Programa 3
let multiplicacao = a * b;
console.log (multiplicacao);

//Programa 4
let divisao = a / b;
console.log (divisao);

//Programa 5
let modulo = a % b;
console.log (modulo);

//Programa 6
if (a > b) {
  console.log (a)
}
else {
  console.log (b)
}

//Programa 7
let c = 8;
if (a > b && a > c){
  console.log (a)
}
else if (b > a && b > c){
  console.log (b)
}
else if (c > a && c > b){
  console.log (c)
}

//Programa 8
if (a > 0) {
  console.log ("positive")
}
else if (a < 0) {
  console.log ("negative")
}
else {
  console.log ("zero")
}

//Programa 9
a = 90
b = 60
c = 30

if (a + b + c == 180){
  console.log ("true")
}
else {
  console.log ("false")
}

//Programa 10
let peça = "Bispo" .toLowerCase();

if (peça == "peao"){
  console.log ("uma casa para frente")
}
else if (peça == "torre"){
  console.log ("vertical ou horizontal")
}
else if (peça == "cavalo"){
  console.log ("movimento em L")
}
else if (peça == "bispo"){
  console.log ("diagonal")
}
else if (peça == "rainha"){
  console.log ("vertical, horizontal e diagonal")
}
else if (peça == "rei"){
  console.log ("uma casa para qualquer direção")
}
else {
  console.log ("peça inválida")
}

//Progama 11
let nota = 56;

if (nota >= 90){
  console.log ("A")
}
else if (nota >= 80){
  console.log ("B")
}
else if (nota >= 70){
  console.log ("C")
}
else if (nota >= 60){
  console.log ("D")
}
else if (nota >= 50){
  console.log ("E")
}
else if (nota < 50){
  console.log ("F")
}
else {
  console.log ("Nota inválida")
}

//Programa 12
let x = 2;
let y = 4;
let z = 1;

if (x % 2 == 0 || y % 2 == 0 || z % 2 == 0) {
  console.log ("true")
}
else {
  console.log ("false")
}

//Programa 13
if (x % 2 != 0 || y % 2 != 0 || z % 2 != 0) {
  console.log ("true")
}
else {
  console.log ("false")
}

//Programa 14
let valorCusto = 720;
let valorVenda = 950;
let valorCustoTotal = valorCusto + valorCusto * 0.2
let lucro = valorVenda - valorCustoTotal

if (valorCusto >= 0 && valorVenda >= 0){
  console.log (lucro * 1000)
}
else {
  console.log ("Valores inválidos")
}

//Programa 15

//Passo 1: descobrir salário-base (desconto inss)

let salarioBruto = 3000;
let aliquota = 0;

if (salarioBruto <= 1556.94){
  aliquota = 0.08 * salarioBruto
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
  aliquota = 0.09 * salarioBruto
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  aliquota = 0.11 * salarioBruto
}
else {
  aliquota = 570.88
} 

let salarioBase = salarioBruto - aliquota

if (salarioBruto < 5189.82){
  console.log ("O salário base é:" + salarioBase)
}
else if (salarioBruto >= 5189.82){
console.log ("O salário base é:" + salarioBaseAlto)
}
// ATÉ AQUI RODOU

//Passo 2: deduzir IR com base no salário-base

let ir = 0;

if (salarioBase <= 1903.98){
  ir = 0
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65){
  ir = 0.075 * salarioBase - 142.80
}

else if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
  ir = 0.15 * salarioBase - 354.80
}

else if (salarioBase >= 3751.06 && salarioBase <= 4664.68){
  ir = 0.225 * salarioBase - 636.13
}
else {
  ir = 0.275 * salarioBase - 868.36
}


let salarioLiquido = salarioBase - ir

console.log ("O salário líquido é:" + salarioLiquido)


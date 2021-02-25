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
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1. Crie uma função para adicionar o turno da manhã na lesson2 . 

const addShift = (object, key, value) => {
  object[key] = value
};

addShift(lesson2, 'turno', 'manhã');

console.log(lesson2);

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const showKeys = (obj) => Object.keys(obj);

console.log(showKeys(lesson1));

// 3. Crie uma função para mostrar o tamanho de um objeto.

const sizeObj = (obj) =>  Object.keys(obj).length;

console.log(sizeObj(lesson1));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const showValues = (obj) => Object.values(obj);

console.log(showValues(lesson1));

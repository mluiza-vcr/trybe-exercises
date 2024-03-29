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

const sizeObj = (obj) => Object.keys(obj).length;

console.log(sizeObj(lesson1));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const showValues = (obj) => Object.values(obj);

console.log(showValues(lesson1));

// 5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . 

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const numberOfStudents = (obj) => {
  const numberOfStudents1 = obj.lesson1.numeroEstudantes;
  const numberOfStudents2 = obj.lesson2.numeroEstudantes;
  const numberOfStudents3 = obj.lesson3.numeroEstudantes;

  return numberOfStudents1 + numberOfStudents2 + numberOfStudents3;
}

console.log(numberOfStudents(allLessons));

// 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const getValueByNumber = (obj, position) => Object.values(obj)[position];

console.log(getValueByNumber(lesson1, 1))

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj); //array pares valor-chave
  let isEqual = false;
  for(let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) {
      isEqual = true;
    }
  }
  return isEqual;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));


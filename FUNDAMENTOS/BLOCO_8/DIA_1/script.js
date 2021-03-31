// exercício 1

const employee = (nomeCompleto) => ({
  nome: nomeCompleto,
  email: `${nomeCompleto.toLowerCase().replace(" ", "_")}@trybe.com`
})




const newEmployees = () => {
  const employees = {
    id1: employee('Pedro Guerra'),
    id2: employee('Luiza Drumond'),
    id3: employee('Carla Paiva')
  }
  return employees;
};


console.log(newEmployees());


// exercício 2

const sorteio = (numero, func) => {
  const numeroAleatorio = Math.ceil(Math.random() * 5);
  console.log(numeroAleatorio);

  if (func(numero, numeroAleatorio)) {
    console.log("Parabéns, você ganhou")
  } else {
    console.log('Tente novamente!')
  }
}


const func = (numero, numeroAleatorio) => {
  if (numero === numeroAleatorio) {
    return true;
  }
  return false;
}


sorteio(2, func);

// exercício 3

const correctAnswer = (gabarito, fn) => {
  return (respostaDada) => fn(gabarito, respostaDada);
};


const compare = (gabarito, respostaDada) => {
  return (respostaDada.toLowerCase() === gabarito.toLowerCase()) ? true : false;
}

const answer = correctAnswer("gabarito", compare)("gabarito36y3278238");

console.log(answer);

// exercício 4

const grade = (arrayGabaritos, arrayRespostas, func) => {
  return func(arrayRespostas, arrayGabaritos)
};

const check = (arrayGabaritos, arrayRespostas) => {
  let score = 0;

  for (let i = 0; i < arrayGabaritos.length; i += 1) {
    if (arrayGabaritos[i] === arrayRespostas[i]) {
      score += 1
    } else if (arrayRespostas[i] !== "N.A") {
      score -= 0.5
    } else {
      score -= 0
    }
  }
  return score
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(grade(rightAnswers, studentAnswers, check));
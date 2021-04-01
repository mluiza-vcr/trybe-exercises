// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em 
// uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

const findX = (sentence, xablau) => {
  const split = sentence.split(''); // retorna array de caracteres;
  for (let index = 0; index < split.length; index += 1) {
    if (split[index] === "x") {
      split[index] = xablau
    }
  }
  const newSentence = split.join('');
  return newSentence;  
}

const newSentence = findX("Tryber x aqui!", "xablau");

//Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada 
//para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .

const skills = ["git", "javaScript", "css", "html", "dom"];

const concatenate = (parameter) => {
  const skills2 = skills.sort();
  return `${parameter}! Minhas cinco principais habilidades são:
  *${skills2[0]}
  *${skills2[1]}
  *${skills2[2]}
  *${skills2[3]}
  *${skills2[4]}
  `
}

console.log(concatenate(newSentence));
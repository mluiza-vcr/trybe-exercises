//crie uma função que receba três parâmetros, sendo eles: um objeto, o nome de uma chave e o seu valor. 
//O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.


const newObject = (object, key, value) => {
  let newKey = key;
  object[newKey] = value;
  return object
}

const customer = {
  name: "Jackson",
  lastName: "Pires",
  age: 40
}


console.log(newObject(customer, "city", "Belo Horizonte"));




const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// Tente criar uma função que exiba as habilidades do objeto student. Cada habilidade deve ser exibida no formato 
// "Nome da habilidade, Nível: valor da chave referente à habilidade". 
// Após tentar criar a função, veja a sugestão de resposta logo abaixo e compare com a sua solução.

const showSkills = (student) => {
  const arrayOfSkills = Object.keys(student);
  
  for (let index in arrayOfSkills) {
    console.log (`Nome da habilidade: ${arrayOfSkills[index]} Nível: ${student[arrayOfSkills[index]]}`)
  }
}


console.log('Estudante 1');
showSkills(student1);

console.log('Estudante 2');
showSkills(student2);




const países = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};
const pairKeyValue = Object.entries(países);
console.log(pairKeyValue);

for(index in pairKeyValue) {
  console.log('--------');
  console.log('Pais:', pairKeyValue[index][0]);
  console.log('Capital:', pairKeyValue[index][1]);
};







const person = {
  name:'Roberto',
};

const lastName = {
  lastName: 'Silva',
};

const newPerson = Object.assign({},person,lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
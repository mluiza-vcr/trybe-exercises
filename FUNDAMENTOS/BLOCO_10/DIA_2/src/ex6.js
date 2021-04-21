const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = async (animalName) => {
  const objectAnimal = Animals.find(({ name }) => name === animalName);
  if (objectAnimal) return objectAnimal;
  throw('Nenhum animal com esse nome!');
};

const getAnimal = async (name) => {
  const response = await findAnimalByName(name);
  return response;
};

const findAnimalByAge = async (animalAge) => {
  const objectAnimal = Animals.find(({age}) => age === animalAge);
  if (objectAnimal) return objectAnimal;
  throw('Nenhum animal com essa idade!');
}

const getAnimal2 = async (age) => {
  const response = await findAnimalByAge(age);
  return response;
}

module.exports = { getAnimal, getAnimal2 }
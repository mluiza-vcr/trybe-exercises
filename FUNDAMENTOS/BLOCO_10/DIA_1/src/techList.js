function techList(array, name) {
  if (array.length === 0) return 'Vazio!';

  const list = array
  .sort()
  .map((item) => ({
    tech: item,
    name,
  }));
  return list;
};


module.exports = techList;
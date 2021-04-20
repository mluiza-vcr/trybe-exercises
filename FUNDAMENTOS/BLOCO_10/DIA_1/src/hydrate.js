function hydrate(string) {
  const array = string.split('');
  let water = 0;
  array.forEach((caracter) => {
    if(caracter > 0) water += parseInt(caracter);
  })

  if (water === 1) return water + ' copo de água';
  else if (water > 1) return water + ' copos de água';
};

module.exports = hydrate;
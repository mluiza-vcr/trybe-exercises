function calculate(num1, num2, num3) {
  return new Promise((resolve, reject) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
      return reject('Informe apenas números');
    }
    const result = (num1 + num2) * num3;
    if (result < 50) {
      return reject('Valor muito baixo');
    }
    resolve(result);
  })
}

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 100 + 1);

calculate(a, b, c)
.then(resolve => console.log(resolve))
.catch(err => console.error(err.message));
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

calculate(10, 10, 10)
.then(resolve => console.log(resolve))
.catch(error => console.log(error));

calculate(1, 1, 'a')
.then(resolve => console.log(resolve))
.catch(error => console.log(error));

calculate(1, 1, 1)
.then(resolve => console.log(resolve))
.catch(error => console.log(error));
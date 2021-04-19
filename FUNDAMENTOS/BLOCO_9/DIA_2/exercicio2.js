const fetch = require('node-fetch');

async function verifyNumber() {
  const randomArray = [Math.ceil(Math.random() * 50) ** 2, Math.ceil(Math.random() * 50) ** 2, Math.ceil(Math.random() * 50) ** 2, Math.ceil(Math.random() * 50) ** 2, Math.ceil(Math.random() * 50) ** 2, Math.ceil(Math.random() * 50) ** 2, Math.ceil(Math.random() * 50) ** 2, Math.ceil(Math.random() * 50) ** 2, Math.ceil(Math.random() * 50) ** 2, Math.ceil(Math.random() * 50) ** 2];
  const sum = randomArray.reduce((acc, curr) => acc + curr);
  if (sum < 8000) {
    return sum;
  }
  throw new Error (`Promise rejeitada. O número foi ${sum}`);
}

async function message(functionA) {
  const message = await functionA()
  .then((sum) => `Promise resolvida. O número foi ${sum}`)
  .catch((err) => err);
  console.log(message);
}

message(verifyNumber);
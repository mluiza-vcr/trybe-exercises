const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (array, word) => {
  let output = -1;
  array.forEach((element, index) => {
    if (element === word) {
      output = index;
    }
  });
  return output;
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
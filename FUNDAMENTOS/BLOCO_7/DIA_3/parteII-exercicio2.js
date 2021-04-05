const assert = require('assert');

const wordLengths = (array) => {
  const output = [];
  array.forEach(element => {
    output.push(element.length)
  });
  return output;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
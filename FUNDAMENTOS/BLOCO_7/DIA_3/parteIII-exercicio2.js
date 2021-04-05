const assert = require('assert');

const removeVowelsNew = (word) => {
  let characters = word.split('');
  let counter = 0;
  const results = [];

  characters.forEach(element => {
    if (element === 'a' ||
      element === 'e' ||
      element === 'i' ||
      element === 'o' ||
      element === 'u') {
      counter += 1
      results.push(counter);
    } else {
      results.push(element);
    }
  });
  return results.join('');
};


const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowelsNew, 'function');
const output = removeVowelsNew(parameter);
assert.strictEqual(output, result);
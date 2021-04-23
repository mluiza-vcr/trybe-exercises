const showRandomNumber = () => {
  return Math.floor(Math.random() * 101)
};

const showString = (str) => {
  return str.toUpperCase();
};

const showFirstLetter = (str) => {
    return str[0];
;}

const concatStrings = (str1, str2) => {
    return `${str1}${str2}`
};

module.exports = { showRandomNumber, showFirstLetter , showString , concatStrings };
sum = function sum(a, b) {
  return a + b;
};

upCase = function upCase(string) {
  const first = string[0].toUpperCase();
  return first + string.slice(1);
};

reverseString = function reverseString(str) {
  let newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
};

calculator = {
  add: (n1, n2) => n1 + n2,
  subtract: (n1, n2) => n1 - n2,
  divide: (n1, n2) => n1 / n2,
  multiply: (n1, n2) => n1 * n2,
};

caesarCipher = function caesarCipher(string) {};
module.exports = { sum, upCase, reverseString, calculator };

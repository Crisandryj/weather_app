sum = function sum(a, b) {
  return a + b;
};

upCase = function upCase(string) {
  const first = string[0].toUpperCase();
  return first + string.slice(1);
};

reverseString = function reverseString() {};

module.exports = { sum, upCase, reverseString };

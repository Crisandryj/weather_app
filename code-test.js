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

module.exports = { sum, upCase, reverseString };

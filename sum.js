function sum(a, b) {
  return a + b;
}

function upCase(string) {
  const word = string;
  word.charAt(0).toUpperCase() + word.slice(1);
}

module.exports = upCase;
module.exports = sum;

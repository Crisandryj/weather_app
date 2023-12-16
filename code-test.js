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
const alphabets = "0abcdefghijklmnopqrstuvwxyz".split("");

// caesarCipher = function caesarCipher(string, n) {
//   const stringArry = string.split("");
//   let newString = "";

//   stringArry.forEach((letter) => {
//     let lowerL = letter.toLowerCase();
//     //find letter in array
//     let index = alphabets.indexOf(lowerL);
//     if (alphabets.includes(lowerL)) {
//       if (index + n <= 26) {
//         //shift letter over n times
//         //save new letter in newstring
//         newString += alphabets[index + n];
//       } else {
//         newString += alphabets[(index + n) % 26];
//       }
//     } else {
//       newString += letter;
//     }
//   });

//   return newString;
// };

caesarCipher = function caesarCipher(string, n) {
  const stringArry = string.split("");
  let newString = "";

  stringArry.forEach((letter) => {
    let lowerL = letter.toLowerCase();
    let index = alphabets.indexOf(lowerL);
    switch (alphabets.includes(letter)) {
      case true:
        if (index + n <= 26) {
          //shift letter over n times
          //save new letter in newstring
          newString += alphabets[index + n];
        } else {
          newString += alphabets[(index + n) % 26];
        }
        break;
      case false:
        if (alphabets.includes(lowerL)) {
          if (index + n <= 26) {
            //shift letter over n times
            //save new letter in newstring
            newString += alphabets[index + n].toUpperCase();
          } else {
            newString += alphabets[(index + n) % 26].toUpperCase();
          }
        } else {
          newString += letter;
        }
        break;
    }
  });

  return newString;
};

//check each letter
//if letter is in alphabets - shift letter
//if letter is not in alphabets - check if lowercase letter is in alphabets
//if lowercase letter is in - shift lowercase letter and cap new letter
//otherwise include letter

module.exports = { sum, upCase, reverseString, calculator };

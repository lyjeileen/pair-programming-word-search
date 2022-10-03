const transpose = function (matrix) {
  const array = [];
  matrix.forEach((input, i) => {
    input.forEach((number, index) => {
      if (i === 0) {
        array[index] = [number];
      } else {
        array[index].push(number);
      }
    });
  });
  return array;
};

const checkInclude = (words, search) => {
  let found = false;
  for (let word of words) {
    if (word.includes(search)) {
      found = true;
    } else {
      const revertedWord = word.split("").reverse().join();
      if (revertedWord.includes(search)) {
        found = true;
      }
    }
  }
  return found;
};

const toWords = (letters) => letters.map((ls) => ls.join(""));

// const getTriangle = ()

const getDiagonalLetters = (letters) => {
  const top = letters[0].map((letter, index) => {
    const result = [];
    for (let y = index; y >= 0; y--) {
      if (letters[index - y]) result.push(letters[index - y][y]);
    }
    return result;
  });

  const right = letters
    .map((row) => row[row.length - 1])
    .map((letter, index) => {
      const result = [];
      for (let y = index; y <= letters.length - 1; y++) {
        if (letters[y][letters[0].length - y + index - 1]) {
          result.push(letters[y][letters[0].length - y + index - 1]);
        }
      }
      return result;
    });
  return top.concat(right);
};

const wordSearch = (letters, word) => {
  const horizontalJoin = toWords(letters);
  if (checkInclude(horizontalJoin, word)) {
    return true;
  }
  const verticalJoin = toWords(transpose(letters));
  if (checkInclude(verticalJoin, word)) {
    return true;
  }

  const diagonalLetters = getDiagonalLetters(letters);
  console.log(diagonalLetters);
  const diagonalJoin = toWords(diagonalLetters);
  console.log(diagonalJoin);
  if (checkInclude(diagonalJoin, word)) {
    return true;
  }
  // if (checkInclude(transpose(diagonalJoin), word)) {
  //   return true;
  // }
  return false;
};
//00/01,10/02,11,20/03,12,21,30
console.log(
  wordSearch(
    [
      ["A", "W", "C", "F", "Q", "U", "A", "L"],
      ["S", "E", "I", "N", "F", "E", "L", "D"],
      ["Y", "F", "C", "F", "Q", "U", "A", "L"],
      ["H", "M", "J", "T", "E", "V", "R", "G"],
      ["W", "H", "C", "S", "Y", "E", "R", "L"],
      ["B", "F", "R", "E", "N", "E", "Y", "B"],
      ["U", "B", "T", "W", "A", "P", "A", "I"],
      ["O", "D", "C", "A", "K", "U", "A", "S"],
      ["E", "Z", "K", "F", "Q", "U", "A", "L"],
    ],
    "FRANK"
  )
);

// console.log(
//   wordSearch(
//     [
//       ["A", "W", "C", "F", "Q", "U", "A", "L"],
//       ["S", "E", "I", "N", "F", "E", "L", "D"],
//       ["Y", "F", "C", "F", "Q", "U", "A", "L"],
//       ["H", "M", "J", "T", "E", "V", "R", "G"],
//       ["W", "H", "C", "S", "Y", "E", "R", "L"],
//       ["B", "F", "R", "E", "N", "E", "Y", "B"],
//       ["U", "B", "T", "W", "A", "P", "A", "I"],
//       ["O", "D", "C", "A", "K", "U", "A", "S"],
//       ["E", "Z", "K", "F", "Q", "U", "A", "L"],
//     ],
//     "SEINFELD"
//   )
// );

// console.log(
//   wordSearch(
//     [
//       ["A", "W"],
//       ["S", "E"],
//       ["Y", "F"],
//       ["H", "M"],
//       ["W", "H"],
//       ["B", "F"],
//       ["U", "B"],
//       ["O", "D"],
//       ["E", "Z"],
//     ],
//     "FRANK"
//   )
// );
module.exports = wordSearch;

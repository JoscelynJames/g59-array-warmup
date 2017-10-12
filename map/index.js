function multiplyBy10(array) {
return array.map(num => num * 10)
}

function onlyVowels(array) {
  return array.map((word) => {
    word.replace(/[^aeiou]*/gi, '');
  })
}

function doubleMatrix(array) {
  return array.map(i => i.map((j) => j * 2))
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};

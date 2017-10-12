function onlyEven(array) {
  return array.filter(num => num % 2 === 0);
}

// refactor with filter!! OMG!

function onlyOneWord(array) {
  //where are the snacks?
  return array.filter((word) => {
    console.log(word.length, '========')
  })
}

function positiveRowsOnly(array) {
  //is Dan human?
  array.filter((row) => {
    row.indexOf() % 2 === 0 
  })
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly
};

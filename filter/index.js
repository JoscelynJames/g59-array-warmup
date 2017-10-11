function onlyEven(array) {
  return array.filter(num => num % 2 === 0);
  // const evens = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i] % 2 === 0) {
  //     evens.push(array[i]);
  //   }
  // }
  // return evens;
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

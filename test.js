const arrayTest = [1, 3, 5, 7, 8, 10, 5, 9, 10, 4];

// tim so lon thu 2
function getSecondHighest(arrayTest) {
  var first = 0,
    second = 0;
  for (var i = 0; i < arrayTest.length; i++) {
    if (arrayTest[i] > first) {
      second = first;
      first = arrayTest[i];
    } else if (arrayTest[i] > second && arrayTest[i] < first) {
      second = arrayTest[i];
    }
  }
  return console.log(second);
}
getSecondHighest(arrayTest);
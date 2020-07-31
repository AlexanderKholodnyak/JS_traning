function findLongestWord(string = '') {
  // Write code under this line
  const array = string.split(' ');
  let longestWord = '';
  for (const arrays of array) {
    if (longestWord.length < arrays.length) {
      longestWord = arrays;
    }
  }
  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'

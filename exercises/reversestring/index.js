// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
//* Solution 4
function reverse(str) {
  // return str.split("").reduce((reversed, character) => {
  //   return character + reversed;
  // }, "");

  return str.split("").reduce((rev, char) => char + rev, "");
  // str = hello
  // 1st element rev='', char='h'
  // 2nd element rev = 'h', char='e'
  // 3rd element rev = 'eh', char='l'
  // 4th element rev = 'leh', char='l'
  // 5th element rev = 'lleh', char='o'
  // Final char+rev = 'olleh'
}

module.exports = reverse;

//* Solution 1
// function reverse(str) {

//   const arr = str.split("");
//   arr.reverse();
//   return arr.join("");
// }

//* Solution 2
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

//* Solution 3
// function reverse(str) {
//   let reversed = "";

//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }

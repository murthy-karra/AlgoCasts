// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = "";

  for (let each of str) {
    chars[each] = chars[each] + 1 || 1;
  }
  //console.log(chars);
  for (let each in chars) {
    if (chars[each] > max) {
      max = chars[each];
      maxChar = each;
    }
  }
  return maxChar;
}
// function maxChar(str) {
//   const chars = {};
//   for (each in str) {
//     if (!chars[each]) {
//       chars[each] = 1;
//     } else {
//       chars[each]++;
//     }
//   }
// }

module.exports = maxChar;

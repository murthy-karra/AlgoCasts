// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
function buildCharMap(str) {
  const charMap = {};
  str = str.replace(/[^\w]/g).toLowerCase();
  for (let each of str) {
    charMap[each] = charMap[each] + 1 || 1;
  }
  return charMap;
}

function checkLengths(strA, strB) {
  if (strA.replace(/[^\w]/g).length != strB.replace(/[^\w]/g).length) {
    return false;
  }
}
function anagrams(stringA, stringB) {
  if (checkLengths(stringA, stringB)) {
    return false;
  }

  const aMap = buildCharMap(stringA);
  const bMap = buildCharMap(stringB);

  for (let key in aMap) {
    if (aMap[key] != bMap[key]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;

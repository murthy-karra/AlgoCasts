// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase().split("");
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase().split("");
  if (stringA.length != stringB.length) {
    return false;
  }
  const aMap = {};
  const bMap = {};
  for (let char of stringA) {
    aMap[char] = aMap[char] + 1 || 1;
  }
  for (let char of stringB) {
    bMap[char] = bMap[char] + 1 || 1;
  }
  console.log(aMap, bMap);

  for (let key in aMap) {
    if (aMap[key] != bMap[key]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;

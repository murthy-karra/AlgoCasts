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
function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
  console.log(cleanString(stringA), cleanString(stringB));
  if (cleanString(stringA) == cleanString(stringB)) {
    return true;
  } else {
    return false;
  }
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const aMap = buildCharMap(stringA);
//   const bMap = buildCharMap(stringB);

//   if (Object.keys(aMap).length != Object.keys(bMap).length) return false;
//   for (let key in aMap) {
//     if (aMap[key] != bMap[key]) {
//       return false;
//     }
//   }
//   return true;
// }

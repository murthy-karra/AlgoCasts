// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // Slice copies
  let index = 0;
  let chunked = [];
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index = index + size;
  }
  return chunked;
}

// function chunk(array, size) {
//   let chunked = [];
//   array.forEach((element) => {
//     if (chunked.length === 0 || chunked[chunked.length - 1].length === size) {
//       console.log(array, size, chunked);
//       chunked.push([]);
//       chunked[chunked.length - 1].push(element);
//     } else {
//       chunked[chunked.length - 1].push(element);
//     }
//   });
//   return chunked;
// }

module.exports = chunk;

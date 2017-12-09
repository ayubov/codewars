// Snail Sort
//
// Given an n x n array, return the array elements arranged from outermost
// elements to the middle element, traveling clockwise.
//
// array = [[1,2,3],
//  [4,5,6],
//  [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:
//
// array = [[1,2,3],
//  [8,9,4],
//  [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:
//
//
//
// NOTE: The idea is not sort the elements from the lowest value to the highest;
// the idea is to traverse the 2-d array in a clockwise snailshell pattern.
//
// NOTE 2: The 0x0 (empty matrix) is represented as [[]]
//

const snail = (array, result = []) => {
  if (array.length === 1) { return [...result, ...array[0]]; }
  if (!array.length) { return result; }
  const rightSide = array.slice(1, -1).map(e => e[e.length - 1]);
  const leftSide = array.slice(1, -1).reverse().map(e => e[0]);
  const newResult = [...array[0], ...rightSide, ...array.slice(-1)[0].reverse(), ...leftSide];
  return snail(array.slice(1, -1).map(e => e.slice(1, -1)), [...result, ...newResult]);
};

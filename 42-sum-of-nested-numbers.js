// Build a function sumNestedNumbers/sum_nested_numbers that finds the sum of all numbers
// in a series of nested arrays,raised to the power of their respective nesting levels.
// Numbers in the outer most array should be raised to the power of 1.

// For example,

// sumNestedNumbers([1, [2], 3, [4, [5]]])
// should return 1 + 2*2 + 3 + 4*4 + 5*5*5 === 149

const sumNestedNumbers = (arr, range = 1) => arr.reduce((acc, e) =>
  acc + (e instanceof Array ? sumNestedNumbers(e, range + 1) : e ** range), 0);

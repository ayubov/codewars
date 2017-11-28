// Implement a function to calculate the sum of the numerical values in a nested list.
// For example :
// sumNested([1, [2, [3, [4]]]]) => 10

const sumNested = arr => arr.reduce((acc, e) => (acc + (e instanceof Array ? sumNested(e) : e)), 0);

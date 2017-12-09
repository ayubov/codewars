// #Pascal's Triangle

// Wikipedia article on Pascal's Triangle: http://en.wikipedia.org/wiki/Pascal's_triangle

// Write a function that, given a depth (n), returns a single-dimensional array
// representing Pascal's Triangle to the n-th level.

// For example:

// pascalsTriangle(4) == [1,1,1,1,2,1,1,3,3,1]

const pascalsTriangle = (n, pr = []) => {
  if (!n) { return ''; }
  const currentLevel =
  [...pr.reduce((acc, e, i, a) => (i === 0 ? [1] : [...acc, e + a[i - 1]]), []), 1];
  return [...currentLevel, ...pascalsTriangle(n - 1, currentLevel)];
};

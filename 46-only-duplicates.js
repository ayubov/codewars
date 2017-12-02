// Given a string, remove any characters that are unique from the string.

// Example:

// input: "abccdefee"

// output: "cceee"

export default str => str.split('').filter(e => str.indexOf(e) !== str.lastIndexOf(e)).join('');

/* Find the missing letter
   Write a method that takes an array of consecutive (increasing)
   letters as input and that returns the missing letter in the array.
   You will always get an valid array. And it will be always exactly
   one letter be missing. The length of the array will always be at least 2.
   The array will always contain letters in only one case.
   Example:
   ['a','b','c','d','f'] -> 'e'
   ['O','Q','R','S'] -> 'P' */

// #1
export const findMissingLetter = (arr) => {
  let missedLetter = '';
  const arrStr = arr.join('');
  for (let i = 0; i < arrStr.length - 1; i += 1) {
    if (arrStr.charCodeAt(i) + 1 !== arrStr.charCodeAt(i + 1)) {
      missedLetter += String.fromCharCode(arrStr.charCodeAt(i) + 1);
      return missedLetter;
    }
  }
  return missedLetter;
};

// #2
export const findMissingLetter2 = arr =>
  arr.reduce((acc, n) => {
    if ((n.charCodeAt(0) + 1 !== (arr[arr.indexOf(n) + 1] || '').charCodeAt(0)) && (n !== arr[arr.length - 1])) {
      return String.fromCharCode(arr[arr.indexOf(n)].charCodeAt(0) + 1);
    }
    return acc;
  }, '');

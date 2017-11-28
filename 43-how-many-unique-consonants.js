// Write a function that counts the number of unique consonants in a string.

// Consonants are letters used in English other than 'a', 'e', 'i', 'o', 'u'.
// We will count 'y' as a consonant.

// Remember, your function needs to return the number of unique consonants -
// disregarding duplicates.
// For example, if the string passed into the function reads "add",
// the function should return 1 rather than 2, since 'd' is a duplicate.

// Similarly, the function should also disregard duplicate consonants of differing cases.
// For example, "Dad" passed into the function should return 1.

export default str => str.toLowerCase().split('').reduce((acc, e) => (
  'bcdfghjklmnpqrstvwxyz'.includes(e) && !acc.includes(e) ?
    [...acc, e] : acc), []).length;

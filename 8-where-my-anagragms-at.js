// task description
/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

// solution #1 (imperative)
const anagrams = (word, words) => {

const sortAlphabets = (text) => `${text}`.split('').sort().join('');
const sortedWord= sortAlphabets(word);
let result = [];
for (let i = 0; i < words.length; i++) {
let sortedOneOfWords = sortAlphabets(words[i]);
if (sortedWord === sortedOneOfWords) {
result = result.concat(words[i]);};
}
return result;
}

// solution #2 (functional)
const anagrams = (word, words) => {
const stringSort = (text) => `${text}`.split('').sort().join('');
return words.filter((n) => stringSort(n) === stringSort(word)); }

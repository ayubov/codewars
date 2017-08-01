// task description
/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphanumeric characters, including digits, uppercase and lowercase alphabets.

Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabbcdeB" -> 2 # 'a' and 'b'
"indivisibility" -> 1 # 'i'
"Indivisibilities" -> 2 # 'i' and 's'
"aa11" -> 2 # 'a' and '1'
*/

//solution
const duplicateCount = str => {

const sortedStr = str.toUpperCase().split('').sort().join('');

let acc = '';
for (let i = 0; i < sortedStr.length; i++) {
if (sortedStr[i] === sortedStr[i + 1] && sortedStr[i] !== acc[acc.length-1]) {
acc+=sortedStr[i];
}}
return acc.length;
}

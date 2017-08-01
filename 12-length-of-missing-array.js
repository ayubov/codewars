// task description
/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3


If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays. 
*/

// solution
const getLengthOfMissingArray = arrs => {

if (arrs === null || arrs.includes(null)) {
return 0; }

const arr = arrs.reduce((acc,n) => acc.concat(n.length), []).sort((a,b) => a-b);

let result;
for (let i = 0; i < arr.length - 1; i++)
if (arr[i] + 1 !== arr[i + 1]) {
result = arr[i] + 1;}

return result === undefined || arr[0] === 0 ? 0 : result;
}

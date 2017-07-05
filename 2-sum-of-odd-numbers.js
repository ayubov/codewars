// task description
/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

rowSumOddNumbers(1); // 1
rowSumOddNumbers(2); // 3 + 5 = 8

*/

// solution #1
const rowSumOddNumbers = n => {

if (n === 1) {
return 1;}

let first = 1;
for (let j = 1; j < n; j++) {
first+=2*j;
}

let result = 0;
for (let i = 0; i < n; i++) {
result+=first+2*i;
}

return result;
}

// solution #2
function rowSumOddNumbers(n) {
return n*n*n;
}

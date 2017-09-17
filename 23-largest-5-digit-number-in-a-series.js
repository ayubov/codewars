/* In the following 6 digit number: 283910
91 is the greatest sequence of 2 digits.
Complete the solution so that it returns the largest five digit number found
within the number given.. The number will be passed in as a string of only digits.
It should return a five digit integer. The number passed may be as large as 1000 digits. */
const solution = (digits) => {
  const digitsArr = digits.split('');
  const itemsToArray = (arr, index) =>
    [arr[index], arr[index + 1], arr[index + 2], arr[index + 3], arr[index + 4]];
  const sum = (arr, index) =>
    arr[index] + arr[index + 1] + arr[index + 2] + arr[index + 3] + arr[index + 4];
  return +digitsArr.reduce((acc, item, index) =>
    (sum(digitsArr, index) > sum(acc, 0) ? itemsToArray(digitsArr, index) : acc), itemsToArray(digitsArr, 0)).join('');
};

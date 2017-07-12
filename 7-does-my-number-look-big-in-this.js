// task description
/*
A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits.

For example, take 153 (3 digits):

    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1634 (4 digits):

    1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
The Challenge:

Your code must return true or false depending upon whether the given number is a Narcissistic number.


*/

// solution

const narcissistic = value => {
  let resultOfSum = 0;
  let strValue = String(value);
  for (let i = 0; i < strValue.length; i++) {
  resultOfSum += Math.pow(Number(strValue[i]), strValue.length);
}
return value === resultOfSum;
}

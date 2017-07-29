// task description

/*
You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/

// solution
const averageString = (str) => {

let numbers = {
one: 1,
two: 2,
three: 3,
four: 4,
five: 5,
six: 6,
seven: 7,
eight: 8,
nine: 9,
zero: 0
}
  const arr = str.split(" ");
  const sum = arr.reduce((acc,n) => numbers[n] === undefined ? NaN : acc+=numbers[n] , 0);
  const averageNum = Math.floor(sum/arr.length);

  if (isNaN(sum) || (str.length === 0)) {
  return 'n/a';
  }
  else {
  return Object.keys(numbers).find(key => numbers[key] === averageNum);
  }
}

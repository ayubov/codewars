/* Is Prime
Define a function isPrime/is_prime() that takes one integer argument and
returns true/True or false/False depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater
than 1 that has no positive divisors other than 1 and itself.

Example

isPrime(5)
=> true
Assumptions

You can assume you will be given an integer input.
You can not assume that the integer will be only positive.
You may be given negative numbers as well (or 0). */

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (number, acc) => {
    if (acc === 1) {
      return true;
    }
    if (number % acc === 0) {
      return false;
    }
    return iter(number, acc - 1);
  };
  return iter(num, num - 1);
};

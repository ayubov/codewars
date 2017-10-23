/* Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42.
These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764.
The sum of the squared divisors is 2500 which is 50 * 50, a square!
Given two integers m, n (1 <= m <= n) we want to find all integers between m and n
whose sum of squared divisors is itself a square. 42 is such a number.
The result will be an array of arrays(in C an array of Pair), each subarray havingtwo elements,
first the number whose squared divisors is a square and then the sum of the squared divisors.

#Examples:
list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]] */

export default (m, n) => {
  const divisorsSumCounter = (integer, actualDivisor, sumOfDivisors) => {
    if (actualDivisor > integer / 2) {
      return sumOfDivisors + (integer * integer);
    }
    if (integer % actualDivisor === 0) {
      return divisorsSumCounter(integer, actualDivisor + 1,
        sumOfDivisors + (actualDivisor * actualDivisor));
    }
    return divisorsSumCounter(integer, actualDivisor + 1, sumOfDivisors);
  };

  const resultMaker = (actualInteger, result) => {
    const actualSum = divisorsSumCounter(actualInteger, 1, 0);
    if (actualInteger > n) {
      return result;
    }
    if (Math.sqrt(actualSum) % 1 === 0) {
      return resultMaker(actualInteger + 1, result.concat([[actualInteger, actualSum]]));
    }
    return resultMaker(actualInteger + 1, result);
  };

  return resultMaker(m, []);
};

/*
At a job interview, you are challenged to write an algorithm to check if a given string,
s, can be formed from two other strings, part1 and part2.
The restriction is that the characters in part1 and part2 are in the same order as in s.
The interviewer gives you the following example and tells you to figure out the rest from
the given test cases.
For example:
'codewars' is a merge from 'cdw' and 'oears':
    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears */

const isMerge = (s, part1, part2) => {
  const arr1 = part1.split('');
  const arr2 = part2.split('');
  const sArr = s.split('');

  const betterWay = (index) => {
    for (let i = index, k = 0; i <= s.length - 1; i += 1, k += 1) {
      if (s[i] !== arr1[k] && s[i] === arr2[k]) {
        return 2;
      }
      if (s[i] !== arr2[k] && s[i] === arr1[k]) {
        return 1;
      }
      if (s[i] !== arr2[k] && s[i] !== arr1[k]) {
        return 1;
      }
    }
    return 'error';
  };

  return sArr.reduce((acc, n, index) => {
    if (n === arr1[0] && betterWay(index) === 1) {
      arr1.shift();
      return acc;
    }
    if (n === arr2[0] && betterWay(index) === 2) {
      arr2.shift();
      return acc;
    }
    return acc + 1;
  }, 0) === 0 && arr1.length === 0 && arr2.length === 0;
};

// A format for expressing an ordered list of integers is to use a comma separated list of either

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the
// range by a dash, '-'. The range includes all integers in the interval including both endpoints.
// It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
// Complete the solution so that it takes a list of integers in increasing order and returns a
// correctly formatted string in the range format.

// Example:

// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

export default list => list.reduce((acc, e, i) => {
  if ((i !== 0 && (acc[acc.length - 1] + 1 !== e)) || i === list.length - 1) {
    const reverseRangeInd = acc.slice().reverse()
      .findIndex((x, ind, a) => (ind === 0 ? false : a[ind - 1] !== x + 1));
    const startRange = reverseRangeInd === -1 ? 0 : acc.length - reverseRangeInd;
    if ((reverseRangeInd > -1 || acc.every((y, n) => (n === 0 ? true : y === (acc[n - 1] + 1)))) &&
    startRange <= acc.length - (i === list.length - 1 ? 2 : 3)) {
      const last = i === list.length - 1 ? [`${acc[startRange]}-${e}`] : [`${acc[startRange]}-${acc[acc.length - 1]}`, e];
      return [...acc.slice(0, startRange), ...last];
    }
  }
  return [...acc, e];
}, []).join(',');

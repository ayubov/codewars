/*
Find the most common Data Type within a given array.

For Example, ['1', '2', 2] should return 'string'.

If there are any ties at all then just return 'We got a tie!'
*/

class CommonDatatypes {
  check(arr) {
    const arrObj = arr.reduce((acc, e) => (acc[typeof e] ?
      { ...acc, [typeof e]: acc[typeof e] + 1 } : { ...acc, [typeof e]: 1 }), {});
    const biggestValue = Object.keys(arrObj).map(e => arrObj[e]).sort((a, b) => b - a)[0];
    const result = Object.keys(arrObj).reduce((acc, key) => (arrObj[key] === biggestValue ? acc.concat(key) : acc), []);
    return result.length === 1 ? result[0] : 'We got a tie!';
  }
}


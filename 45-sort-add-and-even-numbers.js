// You have an array of numbers.
// Your task is to sort ascending odd numbers and descending even numbers.

// Note that zero is even number. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 8, 4, 5, 2]

export default (array) => {
  const oddEven = array.map(e => (e % 2 === 0 || e === 0 ? 'e' : 'o'));
  const even = array.filter(e => e % 2 === 0 || e === 0).sort((a, b) => b - a);
  const odd = array.filter(e => e % 2 !== 0 && e !== 0).sort((a, b) => a - b);
  return oddEven.reduce((acc, e) => {
    if (e === 'e') {
      const newE = even.shift();
      return [...acc, newE];
    }
    const newO = odd.shift();
    return [...acc, newO];
  }, []);
};

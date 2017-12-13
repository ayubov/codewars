// You have to create a function that takes a positive integer number and
// returns the next bigger number formed by the same digits:

// nextBigger(12)==21
// nextBigger(513)==531
// nextBigger(2017)==2071
// If no bigger number can be composed using those digits, return -1:

// nextBigger(9)==-1
// nextBigger(111)==-1
// nextBigger(531)==-1

export default (n) => {
  const arr = String(n).split('');

  if (arr.join('') === arr.slice().sort((a, b) => b - a).join('')) { return -1; }

  const compare = a => a.reduceRight((acc, e, i) => {
    if (acc.length > 0) { return acc; }
    const bigger = a.slice(i).filter(k => k > e).sort()[0];
    if (bigger) {
      const biggerInd = a.lastIndexOf(bigger);
      return [i, ...a.slice(0, i), a[biggerInd], ...a.slice(i + 1, biggerInd), e, ...a.slice(biggerInd + 1)];
    }
    if (!i) { return [...compare(a.slice(0, -1)), a[a.length - 1]]; }
    return acc;
  }, []);

  const [ind, ...array] = compare(arr);
  return +[...array.slice(0, ind + 1), ...array.slice(ind + 1).sort((a, b) => a - b)].join('');
};

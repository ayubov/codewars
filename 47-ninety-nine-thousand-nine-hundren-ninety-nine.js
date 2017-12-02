// Write a method that takes a number and returns a string of that number in English. For example

// numberToEnglish(27) // => 'twenty seven'
// Your method should be able to handle any number between 0

const numberToEnglish = (num) => {
  if (num % 1 !== 0 || num < 0) return '';

  const ones = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
  };
  const tens = {
    2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety',
  };

  const operations = [
    {
      check: n => n < 20,
      make: n => ones[n],
    },
    {
      check: n => n < 100,
      make: n => `${tens[n[0]]}${n[1] === '0' ? '' : ` ${ones[n[1]]}`}`,
    },
    {
      check: n => n < 1000,
      make: n => `${ones[n[0]]} ${n % 100 === 0 ? 'hundred' : `hundred ${numberToEnglish(Number(n.slice(1)))}`}`,
    },
    {
      check: () => true,
      make: n => `${numberToEnglish(n.slice(0, n.length - 3))} ${n % 1000 === 0 ? 'thousand' : `thousand ${numberToEnglish(Number(n.slice(-3)))}`}`,
    }];

  const obj = operations.find(({ check }) => check(num));
  return obj.make(num.toString());
};

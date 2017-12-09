// Your job is to create a calculator which evaluates expressions in Reverse Polish notation.
//
// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to
// 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.
//
// Note that for simplicity you may assume that there are always spaces between
//  numbers and operations, e.g. 1 3 + expression is valid, but 1 3+ isn't.
//
// Empty expression should evaluate to 0.
//
// Valid operations are +, -, *, /.
//
// You may assume that there won't be exceptional situations
// (like stack underflow or division by zero).
//

export default (expr) => {
  const ops = {
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };
  const calculate = (arr) => {
    const opInd = arr.findIndex(e => Object.keys(ops).includes(e));
    if (arr.length < 2 || opInd < 0) { return Number(arr.slice(-1)[0]); }
    const calculated = ops[arr[opInd]](Number(arr[opInd - 2]), Number(arr[opInd - 1]));
    return calculate([...arr.slice(0, opInd - 2), calculated, ...arr.slice(opInd + 1)]);
  };
  return calculate(expr.split(' '));
};

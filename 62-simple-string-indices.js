/*
In this Kata, you will be given a string with brackets and an index of an opening bracket
and your task will be to return the index of the matching closing bracket. An opening brace
will always have a closing brace. Return -1 if there is no answer (Haskell return Nothing)

For example, in JS, Python, Ruby...

solve("((1)23(45))(aB)", 0) = 10
the opening brace at index 0 matches the closing brace at index 10
solve("((1)23(45))(aB)", 1) = 3
solve("((1)23(45))(aB)", 2) = -1 -- there is no opening bracket at index 2, so return -1
solve("((1)23(45))(aB)", 6) = 9
solve("((1)23(45))(aB)", 11) = 14
solve("((>)|?(*'))(yZ)", 11) = 14
*/

const solve = (str, ind) => {
  const find = (rest, acc = [], i = 1) => {
    if (!rest.length) return -1;
    if (rest[0] === ')' && !acc.length) return i + ind;
    if (')('.includes(rest[0])) {
      return find(
        rest.slice(1),
        (acc.length && rest[0] !== acc[acc.length - 1] ? acc.slice(0, -1) : [...acc, rest[0]]),
        i + 1,
      );
    }
    return find(rest.slice(1), acc, i + 1);
  };
  return str[ind] !== '(' ? -1 : find([...str.slice(ind + 1)]);
};


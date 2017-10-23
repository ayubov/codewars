/* Given a string of words (x), you need to find the highest scoring word.
   Each letter of a word scores points according to it's position in the alphabet.
   a=1, z=26 and everything inbetween.
   You need to return the highest scoring word as a string.
   If two words score the same, return the word that appears earliest in the original string.
   All letters will be lower case and all inputs will be valid. */

export default x => x.split(' ').reduce((acc, item) => {
  const counting = word => word.split('').reduce((accum, letter) => accum + (letter.charCodeAt(0) - 98), 0);
  return counting(item) > counting(acc) ? item : acc;
}, '');

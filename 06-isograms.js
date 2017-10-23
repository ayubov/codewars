/* An isogram is a word that has no repeating letters, consecutive or non-consecutive.
   Implement a function that determines whether a string that contains only letters
   is an isogram. Assume the empty string is an isogram. Ignore letter case.
   isIsogram( "Dermatoglyphics" ) == true
   isIsogram( "aba" ) == false
   isIsogram( "moOse" ) == false // -- ignore letter cas */

export default (str) => {
  let result = 0;
  const equalCase = str.toLowerCase().split('').sort();
  for (let i = 1; i < equalCase.length - 1; i += 1) {
    result += (equalCase[i] === equalCase[i + 1] || equalCase[i] === equalCase[i - 1]) ? 1 : 0;
  }
  return result === 0;
};

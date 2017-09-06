// task description
/*
In this example you have to validate if a user input string is alphanumeric. The given string is not nil, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces/underscore
*/

// solution
const alphanumeric = (string) => string.length > 0 && string.split("").filter(a => !a.match(/^[a-z0-9]+$/i)).length === 0;

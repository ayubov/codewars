// task description
/*Once upon a time, on a way through the old wild west,…

… a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

How I crossed the desert the smart way.

The directions given to the man are, for example, the following:

["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

Task

Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with data Direction = North | East | West | South. The Clojure version returns nil when the path is reduced to nothing. The Rust version takes a slice of enum Direction {NORTH, SOUTH, EAST, WEST}.
*/

// solution
const dirReduc = (arr) => {
const type = { 'SOUTH' : 1, 'NORTH' : 1, 'WEST' : 2, 'EAST' : 2 };
return arr.reduce((acc, n) => {
if ((n !== acc[acc.length - 1]) && (type[n] === type[acc[acc.length - 1]])) {
acc.pop();
return acc;
}
else {
acc.push(n);
return acc;}}, [])
}

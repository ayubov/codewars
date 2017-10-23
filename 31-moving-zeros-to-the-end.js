/* Write an algorithm that takes an array and moves all of the zeros to the end,
   preserving the order of the other elements. */

const moveZeros = arr => [...arr.filter(e => e !== 0), ...arr.filter(e => e === 0)];

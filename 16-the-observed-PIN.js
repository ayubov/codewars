const getPINs = observed => {

const arr = observed.split('');
const firstAcc = [observed];
const observedArr = observed.split('');

const compliance = new Map([
[1, [1,2,4]],
[2, [1,2,3,5]],
[3, [2,3,6]],
[4, [1,4,5,7]],
[5, [2,4,5,6,8]],
[6, [3,5,6,9]],
[7, [4,7,8]],
[8, [5,7,8,9,0]],
[9, [6,8,9]],
[0, [0,8]]])

const adding = (array,currentAcc,number) => currentAcc.reduce((accumulator,n) => {
accumulator = accumulator.concat(array.reduce((accum, k) => {
let newElement = n.split('');
newElement[number] = String(k);
accum = accum.concat(newElement.join(''));
return accum;}, [n]))
return accumulator;}, currentAcc)

const iter = (list,acc,acc2) => {
if (!list.length) {
return acc;
}
let currentList = list.shift();
return iter(list,adding(compliance.get(Number(currentList)),acc,acc2),acc2 + 1)
}

const unsortedResult = iter(arr,firstAcc,0);
return unsortedResult.filter((item, pos) => (unsortedResult.indexOf(item) === pos) && (item.length === observed.length));
}

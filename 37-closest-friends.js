/*
INFO:
Timmy spends a lot of time talking on the phone and he would like to see which friends he talks to the most.

TASK:
Complete the function closestFriends that takes an array history as input. Each element of history is a string in the following format "(000) 000-0000 00:00:00" (where the first part "(000) 000-0000" represents the phone number Timmy talked to and the second "00:00:00" is the call duration (hours : minutes : seconds). Your job is to find the three contacts Timmy talked to the most and return their names in an array sorted by total call durations.
A global variable phonebook is preloaded and contains all the contacts and their phone numbers.

var phonebook = {
     'John' : '(555) 010-3535',
    'Melissa' : '(442) 130-5165',
  'Jack' : '(333) 010-5135'
    //and so on...
};
The input history array will always have at least three different phone numbers.

EXAMPLE:

var history = ["(555) 010-3535 00:13:24", "(442) 130-5165 01:36:26",
"(333) 010-5135 01:38:24"];
closestFriends(history)  // should return ['Jack','Melissa','John'];
Good luck!
*/

const number = record => record.split('')
  .slice(0, 14)
  .join('');
const time = record => record.split('')
  .slice(16)
  .join('')
  .split(':')
  .reduce((acc, e, ind) => acc + (ind === 3 ? e : e * (60 ** (2 - ind))), 0);

const total = history => history.reduce((acc, e) => {
  const actualNumber = number(e);
  const actualTime = Number(time(e));
  return !acc[actualNumber] ?
    { ...acc, [actualNumber]: actualTime } :
    { ...acc, [actualNumber]: acc[actualNumber] + actualTime };
}, {});

const closestFriends = (history) => {
  const totalList = total(history);
  console.log(totalList);
  return Object.keys(totalList).sort((a, b) => totalList[b] - totalList[a])
    .slice(0, 3)
    .map(e => Object.keys(phonebook).find(key => phonebook[key] === e));
};

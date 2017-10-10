/*
Task

Create a function hallOfFame(players) which return an ordered list of sub-arrays of players with same score.

Input :

list of players
each player is a 2-items array of the form [name, score]
Output :

list of 3 best ranks
each rank is an array of the form [score, name1 (,name2, (name3,...) )] with names of each player with same score.
ranks should be sorted from best score (==higher) to "worst" (lower).
eg:

hallOfFame(["Aya",5], ["Ben",9], ["Clo",5], ["Dan",7]) // -> [ [9,"Ben"], [7, "Dan"], [5, "Aya", "Clo"] ]
when more than 1 player have the same score, they should be sorted alphabeticaly ([42, "Xin","Yang","Zhu"] not [42, "Yang", "Zhu", "Xin"])
Important

In case of equality in first places, next ones will be moved. It means :

If 2 players share the 1st rank, next one(s) move to 3rd rank.
If more than 2 players share the 1st rank other players can't figure on the podium.
If there is only one "1st player" but more than one "2d players" then "3rd" rank is inoccupied.
In these cases "empty" ranks should figure in returned array as empty sub-arrays : [ [123,"Xin","Yang","Zhu"], [], [] ]

Examples :

hallOfFame(["Aya",9], ["Ben",9], ["Clo",9], ["Dan",8.99])
  // -> [ [9, "Aya", "Ben", "Clo"], [], [] ] : 3 players on 1st place no 2nd nor 3rd rank allowed)

hallOfFame(["Aya",9], ["Ben",9], ["Clo",8], ["Dan",7.99])
  // -> [ [9,"Aya","Ben"], [], [8,"Clo"]  ] : 2 players on 1st place -> "2nd" score goes to 3rd rank

hallOfFame(["Aya",9], ["Ben",8], ["Clo",8], ["Dan",7.99])
  // -> [ [9,"Aya"], [8,"Ben","Clo"], []  ] : 1 "1st player", 2 "2nd players" -> no place for the 3rd

hallOfFame(["Aya",9], ["Ben",8], ["Clo",7], ["Dan",6.99])
  // -> [ [9,"Aya"], [8,"Ben"], [7,"Clo"]  ] :  each first places occupied by only 1 player
Don't give up, stay in the Top !
*/

const hallOfFame = (players) => {
  const sortedPlayers = players.sort((a, b) => b[1] - a[1]).map(e => [e[1], e[0]]);
  const results = sortedPlayers.map(e => e[0]);
  const uniqResults = results.filter((e, ind) => ind === results.indexOf(e));
  const sortAlphabetically = (a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  };
  const makeTotalList = result =>
    [result, ...sortedPlayers.filter(e => e[0] === result).map(e => e[1]).sort(sortAlphabetically)];
  let [firstPlace, secondPlace, thirdPlace] =
  [makeTotalList(uniqResults[0]), makeTotalList(uniqResults[1]), makeTotalList(uniqResults[2])];
  if (firstPlace.length > 3) {
    secondPlace = [];
    thirdPlace = [];
  }
  if (firstPlace.length === 3) {
    thirdPlace = secondPlace;
    secondPlace = [];
  }
  if (secondPlace.length + firstPlace.length > 4) {
    thirdPlace = [];
  }
  return [firstPlace, secondPlace, thirdPlace];
};

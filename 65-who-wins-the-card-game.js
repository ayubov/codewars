/*
Ben, Amy and Sam are playing a card game. It's a bit like blackjack where the person
whose score is theclosest to but not bigger than 21 is the winner. However, Ben, Amy
and Sam are in a hurry so they only get to pick one extra card if they want to.
Also they've decided that Aces are always equal to 10.

Your job is to write a function that returns a nested array of the players
and their scores in the order of winner to loser.

Arguments:

An object containing players and their cards.
Each player will need to have their cards added together to work out their current score.

An extra card which will need to be added to certain players scores

An array containing the names of players who choose
to have the value of the extra card added to their score
Rules:

The person whose name is in the second argument must have the value of
the extra card added to their score

If there is a draw, players with the same score must be presented in alphabetic order
e.g. if Ben and Sam both have a score of 10, Ben must be written first.

All picture cards(A, K, Q, J) are equal to 10

Remember if a player's score exceeds 21 they cannot win

Example
var players = {
  "Ben" : "5, 2",
  "Amy" : "4, 3",
  "Sam" : "3, 10",
};

whoWins(players, 3, ["Ben", "Amy"])
//should return [["Sam", 13], ["Amy", 10], ["Ben", 10]];
*/

const whoWon = (players, extraCard, extraTakers) => {
  const totalResults = extraTakers.reduce((scores, name) =>
    ({ ...scores, [name]: `${scores[name]}, ${extraCard}` }), players);
  return Object.entries(totalResults)
    .map(([name, score]) =>
      [name, score.split(', ').reduce((acc, card) =>
        (['A', 'K', 'Q', 'J'].includes(card) ? acc + 10 : acc + Number(card)), 0)])
    .sort(([n1, v1], [n2, v2]) => (v1 > 21 ? 1 : v2 > 21 ? -1 : v2 - v1 || n1.localeCompare(n2)));
};


/*
Your task, should you choose to accept it, is to create two functions:
one that traverses a tree and returns a directory of that tree and one
that traverses a binary search tree (BST) and returns a directory of that
BST. The directory should list each node and its location in the tree;
the order of the nodes listed in the directory does not matter.

Input: tree or binary search tree (BST)
Output: object (a directory)
Constraints: 1 <= number of nodes in tree <= 250
Edge Cases: Don't worry about dealing with empty trees, balancing, or duplicate values
*/

const createTreeDirectory = (tree, location = []) => (!tree.children.length ?
  { [tree.value]: location } :
  {
    [tree.value]: location,
    ...tree.children.reduce((acc, node, index) =>
      ({ ...acc, ...createTreeDirectory(node, [...location, index]) }), {}),
  });

const createBSTDirectory = (bst, location = []) =>
  ['left', 'right'].reduce((acc, side) => (bst[side] ?
    { ...acc, ...createBSTDirectory(bst[side], [...location, side]) } :
    acc), { [bst.value]: location });

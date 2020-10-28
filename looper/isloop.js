'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let nexts = [];
  let currentNode = linkedlist.head;
  do {
    if (currentNode.next || nexts.length > 0) {
      if (nexts.includes(currentNode.next)) {
        return true;
      } else {
        nexts.push(currentNode.next);
      }
    }
    currentNode = currentNode.next;
  } while (currentNode);
  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;

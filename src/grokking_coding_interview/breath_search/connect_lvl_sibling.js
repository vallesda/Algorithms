function connect_level_order_siblings(root) {
    if (root === null) {
      return;
    }
  
    const queue = new Deque();
    queue.push(root);
    while (queue.length > 0) {
      let previousNode = null,
        levelSize = queue.length;
      // connect all nodes of this level
      for (i = 0; i < levelSize; i++) {
        currentNode = queue.shift();
        if (previousNode !== null) {
          previousNode.next = currentNode;
        }
        previousNode = currentNode;
        // insert the children of current node in the queue
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
    }
  }
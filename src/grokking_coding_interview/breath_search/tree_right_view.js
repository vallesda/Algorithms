function tree_right_view(root) {
    result = [];
    if (root === null) {
      return result;
    }
  
    const queue = new Deque();
    queue.push(root);
    while (queue.length > 0) {
      const levelSize = queue.length;
      for (i = 0; i < levelSize; i++) {
        currentNode = queue.shift();
        // if it is the last node of this level, add it to the result
        if (i === levelSize - 1) {
          result.push(currentNode);
        }
        // insert the children of current node in the queue
        if (currentNode.left !== null) {
          queue.push(currentNode.left);
        }
        if (currentNode.right !== null) {
          queue.push(currentNode.right);
        }
      }
    }
  
    return result;
  }
  
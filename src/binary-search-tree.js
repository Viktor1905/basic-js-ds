const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootData = null;
  }

  root() {
    return this.rootData
  }

  add(data) {
    this.rootData = addData(this.rootData, data)

    function addData(node, value) {
      if (node === null) {
        node = new Node (data);
      } else if (node.data === value) {
        return node
      } else if (node.data > data) {
        node.left = addData(node.left, value);
      } else {
        node.right = addData(node.right, value);
      }
      return node
    }

  }

  has(data) {
    return search(this.rootData, data);

    function search(node, value) {
      if (!node) {
        return false;
      } else if (node.data === value) {
        return true;
      }
      return node.data < value ?
        search(node.right, value) :
        search(node.left, value);
    }
  }

  find(data) {
    return search(this.rootData, data);

    function search(node, value) {
      if (!node) {
        return null;
      } else if (node.data === value) {
        return node;
      }
      return node.data < value ?
        search(node.right, value) :
        search(node.left, value);
    }
  }

  remove(data) {
    this.root = removeNode(this.rootData, data);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }  else if (node.data > value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if(!node.left && !node.right) {
          return  null;
        } else if (!node.left) {
          node = node.right;
          return  node;
        } else if (!node.right) {
          node = node.left;
          return node;
        }
        let minRight = node.right;

        while (minRight.left){
          minRight = minRight.left;
        }
        node.data = minRight.data;

        node.right = removeNode(node.right, minRight.data);

        return  node
      }
    }
  }

  min() {
    if (!this.rootData) {
      return null;
    }
    let temp = this.rootData;
    while (temp.left){
      temp = temp.left
    }
    return temp.data
  }

  max() {
    if (!this.rootData) {
      return null;
    }
    let temp = this.rootData;
    while (temp.right){
      temp = temp.right
    }
    return temp.data
  }
}

module.exports = {
  BinarySearchTree
};

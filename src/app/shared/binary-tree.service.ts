import { Injectable } from '@angular/core';
import { TreeNode } from '../shared/models/TreeNode';

@Injectable({
  providedIn: 'root'
})

export class BinaryTreeService {

  animationSpeed = 500;
  nodeAmount = 10;

  nodes: TreeNode[] = [];
  nodeValues: number[] = [];
  root = null;

  constructor() {
    this.generateNewNodes();
  }

  initTree() {
    return this.root = this.sortedArrToBST(0, this.nodeValues.length - 1, 0);
  }

  sortedArrToBST(start, end, level): TreeNode {
    // base case
    if (start > end)
      return null;

    let mid = Math.floor(start + (end - start) / 2);
    let newNode = new TreeNode(this.nodeValues[mid]);
    newNode.level = level;

    newNode.left = this.sortedArrToBST(start, mid - 1, level + 1);
    newNode.right = this.sortedArrToBST(mid + 1, end, level + 1);

    this.nodes.push(newNode);
    return newNode;
  }
  
  generateNewNodes(): void {
    this.nodeValues = [];
    this.nodes = [];
    do {
      const randInt = this.randomInteger(1, 30);
      if (!this.nodeValues.includes(randInt))
        this.nodeValues.push(randInt);
    }
    while (this.nodeValues.length <= this.nodeAmount)
    this.nodeValues.sort((a,b) => a - b);
  }

  randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min


}

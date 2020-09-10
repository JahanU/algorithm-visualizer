import { Injectable } from '@angular/core';
import { TreeNode } from '../shared/models/TreeNode';

@Injectable({
  providedIn: 'root'
})

export class BinaryTreeService {

  animationSpeed = 500;
  nodeAmount = 10;

  nodes: TreeNode[] = [];
  arr = [13,14,15,16,17];
  root = null;

  constructor() {}

  initTree() {
    return this.root = this.sortedArrToBST(0, this.arr.length - 1, 0);
  }

  sortedArrToBST(start, end, level): TreeNode {
    // base case
    if (start > end)
      return null;

    let mid = Math.floor(start + (end - start) / 2);
    let newNode = new TreeNode(this.arr[mid]);
    newNode.level = level;

    newNode.left = this.sortedArrToBST(start, mid - 1, level + 1);
    newNode.right = this.sortedArrToBST(mid + 1, end, level + 1);

    this.nodes.push(newNode);
    return newNode;
  }
  
  resetArray(): void {
    this.arr = [];
    for (let i = 0; i < this.nodeAmount; i++) {
      const randInt = this.randomInteger(1, 30);
      this.arr.push(randInt);
    }
    this.arr.sort((a,b) => a - b);
  }

  randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min


}

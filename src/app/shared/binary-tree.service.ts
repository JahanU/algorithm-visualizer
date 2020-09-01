import { Injectable } from '@angular/core';
import { TreeNode } from '../shared/models/TreeNode';

@Injectable({
  providedIn: 'root'
})

export class BinaryTreeService {

  amount: number = 10;
  preOrderArray: number[] = [];

  constructor() {
    let root: TreeNode = null;
    const res = [1, null, 2, 3, 4, 5, 6, 7];

    while (this.amount-- > 0 && res.length > 0) {
      root = this.insert(root, res.shift());
    }

    console.log(root);
    this.preOrderTraversal(root);
  }


  insert(root: TreeNode, data: number): TreeNode {

    if (root == null) {
      return new TreeNode(data);
    }
    else {
      let curr: TreeNode;
      if (data <= root.data) {
        curr = this.insert(root.left, data);
        root.left = curr;
      }
      else {
        curr = this.insert(root.right, data);
        root.right = curr;
      }
      return root;
    }
  }

  preOrderTraversal(root: TreeNode): number[] {
    this.dfs(root);
    return this.preOrderArray;
  }

  dfs(root: TreeNode): void {
    if (root !== null) {
      this.preOrderArray.push(root.data);
      this.dfs(root.left);
      this.dfs(root.right);
    }
  }

}

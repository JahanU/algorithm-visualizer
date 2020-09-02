import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TreeNode } from '../shared/models/TreeNode';

@Component({
  selector: 'app-binary-tree',
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.scss']
})
export class BinaryTreeComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  hello = 'KAHAN';
  nodes: TreeNode[] = [];
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  preOrderArr = [];


  constructor() { }

  ngOnInit(): void {

    this.ctx = this.canvas.nativeElement.getContext('2d');
    // this.ctx.fillStyle = "yellow";
    // this.ctx.fillRect(0, 0, 1000, 800);

    // for (let i = 0; i < 10; i++) {
    //   this.ctx.beginPath();
    //   this.ctx.arc((100 * i) % 1000, 100, 30, 0, 90); //CanvasPath.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean)
    //   this.ctx.stroke();
    //   // this.ctx.font = "30px Arial";
    //   // this.ctx.fillText("4", (97 * i) % 1000, 110);
    // }

    let root = this.sortedArrToBST(0, this.arr.length - 1);
    this.preOrder(root);

    console.log(this.nodes);

    this.displayNodes();

  }

  displayNodes() {

    for (let i = 0; i < this.nodes.length; i++) {
      this.ctx.beginPath();
      this.ctx.arc(this.nodes[i].xAxis, this.nodes[i].yAxis, 30, 0, 90); //CanvasPath.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean)
      this.ctx.stroke();
      this.ctx.font = "30px Arial";
      this.ctx.fillText("4", this.nodes[i].xAxis, this.nodes[i].yAxis);
    }
  }

  sortedArrToBST(start, end): TreeNode {

    // base case
    if (start > end)
      return null;



    let mid = Math.floor(start + (end - start) / 2);
    let newNode = new TreeNode(this.arr[mid]);
    newNode.xAxis = 300;
    newNode.yAxis = 300;

    newNode.left = this.sortedArrToBST(start, mid - 1);
    if (newNode.left != null) {
      newNode.left.xAxis = newNode.xAxis - 50;
      newNode.left.yAxis = newNode.yAxis + 50;
    }

    newNode.right = this.sortedArrToBST(mid + 1, end);
    if (newNode.right != null) {
      newNode.right.xAxis = newNode.xAxis + 50;
      newNode.right.yAxis = newNode.yAxis + 50;
    }

    this.nodes.push(newNode);

    return newNode;
  }

  preOrder(root: TreeNode) {

    let stack = [] // dfs
    stack.push(root);

    while (stack.length > 0) {
      let pop = stack.pop();

      if (pop != null) {
        // console.log(pop.data + ' ');
        this.preOrderArr.push(pop.data)
        stack.push(pop.right);
        stack.push(pop.left);
      }
    }


  }
}

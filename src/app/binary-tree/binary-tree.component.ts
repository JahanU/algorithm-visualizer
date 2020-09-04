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

  nodes: TreeNode[] = [];
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  preOrderArr = [];
  map = new Map();


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

    let root = this.sortedArrToBST(0, this.arr.length - 1, 0);
    this.preOrder(root);

    console.log(this.preOrderArr);
    this.displayNodes();

  }

  updateSurrounding() {

    this.nodes.sort((a, b) => a.xAxis - b.xAxis);

    for (let i = 0; i < this.nodes.length - 1; i++) {
      if (this.nodes[i].xAxis == this.nodes[i + 1].xAxis) {
        console.log('found matching xAxis!');
        this.nodes[i].xAxis -= 50;
        this.nodes[i + 1].xAxis += 50;
      }
    }
  }
  displayNodes() {

    // this.updateSurrounding();

    console.log(this.nodes);
    for (let i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].yAxis != null) {
        this.ctx.beginPath();
        this.ctx.arc(this.nodes[i].xAxis, this.nodes[i].yAxis, 30, 0, 90); //CanvasPath.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean)
        this.ctx.stroke();
        this.ctx.font = "30px Arial";
        this.ctx.fillText(this.nodes[i].data.toString(), this.nodes[i].xAxis - 8, this.nodes[i].yAxis + 8);
      }
    }
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

  preOrder(root: TreeNode) {

    let stack = [] // dfs
    root.xAxis = 500;
    root.yAxis = 50;
    stack.push(root);

    while (stack.length > 0) {
      let pop = stack.pop();

      if (pop != null) {
        this.preOrderArr.push(pop.data)

        let xAxis = pop.level === 0 ? 200 : 100;

        if (pop.right) {
          pop.right.xAxis = pop.xAxis + xAxis;
          pop.right.yAxis = pop.yAxis + 75;
        }

        if (pop.left) {
          pop.left.xAxis = pop.xAxis - xAxis;
          pop.left.yAxis = pop.yAxis + 75;

        }
        stack.push(pop.right);
        stack.push(pop.left);

      }
    }


  }
}

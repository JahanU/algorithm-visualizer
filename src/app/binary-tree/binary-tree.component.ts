import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TreeNode } from '../shared/models/TreeNode';
import { PreOrder } from './algorithms/preorder';
import { InOrder } from './algorithms/inorder';
import { BinaryTreeService } from '../shared/binary-tree.service';
import { TreeEnum } from '../shared/tree.enum';


@Component({
  selector: 'app-binary-tree',
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.scss']
})
export class BinaryTreeComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  treeEnum = TreeEnum;
  selectedAlgorithm: TreeEnum = TreeEnum.PRE_ORDER;
  nodes: TreeNode[] = [];
  visitedNodes: number[] = [];

  root = null;

  constructor(public binTreeService:  BinaryTreeService) { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.initBinaryTree();
  }

  initBinaryTree() {
    this.clearCanvas();
    this.root = this.binTreeService.initTree();
    this.createNodes(this.root);
    this.displayNodes();
  }

  resetNodes() {
    this.binTreeService.generateNewNodes();
    this.initBinaryTree();
  }

  displayInfo(selectedTraversal: TreeEnum): void {
    this.selectedAlgorithm = selectedTraversal;

  }

  pitchSize(event: any): void {
    this.binTreeService.nodeAmount = event.value;
    this.resetNodes();
  }

  pitchSpeed = (event: any) => this.binTreeService.animationSpeed = event.value;

  startSorting() {
    if (this.selectedAlgorithm == TreeEnum.PRE_ORDER) this.preOrder();
    if (this.selectedAlgorithm == TreeEnum.IN_ORDER) this.inOrder();

  }

  preOrder() {
    const obj = new PreOrder(this.binTreeService, this.ctx, this.canvas, this.visitedNodes);
    obj.preOrderTraversal(this.root);
  }

  inOrder() {
    const obj = new InOrder(this.binTreeService, this.ctx, this.canvas, this.visitedNodes);
    obj.inOrderTraversal(this.root);
  }

  
  displayNodes() {
    this.binTreeService.nodes.forEach((node) => {
      this.highlightNode(node);
      });
    }

    highlightNode(node: TreeNode) {
      // create nodes 
      this.ctx.beginPath();
      this.ctx.lineWidth = 3;
      this.ctx.fillStyle = node.colour;
      // this.ctx.strokeStyle = 'blue';
      this.ctx.arc(node.xAxis, node.yAxis, 30, 0, 90); 
      this.ctx.stroke();
      this.ctx.fill();
  
      // fill node data/style
      this.ctx.font = "30px Arial";
      this.ctx.fillStyle = 'black';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(node.data.toString(),node.xAxis, node.yAxis + 10);
    }

clearCanvas = () => this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);


  createNodes(root: TreeNode) {

    let stack = [] // dfs
    root.xAxis = 400;
    root.yAxis = 50;
    stack.push(root);

    while (stack.length > 0) {
      let pop = stack.pop();

      if (pop != null) {
        let xAxis = pop.level === 0 ? 150 : 75;

        if (pop.right) {
          pop.right.xAxis = pop.xAxis + xAxis;
          pop.right.yAxis = pop.yAxis + 75;
          this.setLines(pop, pop.right);
        }

        if (pop.left) {
          pop.left.xAxis = pop.xAxis - xAxis;
          pop.left.yAxis = pop.yAxis + 75;
          this.setLines(pop, pop.left);
        }
        stack.push(pop.right);
        stack.push(pop.left);

      }
    }
  }

  setLines(parentNode: TreeNode, childNode: TreeNode) {
        // set lines
        this.ctx.beginPath(); // Reset the current path
        this.ctx.lineWidth = 1;
        this.ctx.moveTo(childNode.xAxis, childNode.yAxis); // Staring point
        this.ctx.lineTo(parentNode.xAxis, parentNode.yAxis); // End point
        this.ctx.stroke(); // Make the line visible
  }
}

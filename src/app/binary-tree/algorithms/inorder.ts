import { TreeNode } from '../../shared/models/TreeNode';
import { BinaryTreeComponent } from '../binary-tree.component';
import { BinaryTreeService } from '../../shared/binary-tree.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Colours } from '../../shared/colours.enum';

export class InOrder {

  animationNodes = [];
  visitedNodes: TreeNode[] = [];
  coloursEnum = Colours;
  ctx: CanvasRenderingContext2D;
  canvas: ElementRef<HTMLCanvasElement>;

  constructor(public treeService:  BinaryTreeService,
      ctx: CanvasRenderingContext2D,
      canvas:  ElementRef<HTMLCanvasElement>, 
      visitedNodes: TreeNode[]) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.visitedNodes = visitedNodes;
  }

  inOrderTraversal(root: TreeNode) {
    let stack = [];
    
    while (stack.length > 0 || root != null) {
        while (root != null) {
          stack.push(root);
          root = root.left;
        }
        let pop = stack.pop();
        this.animationNodes.push(pop);
        root = pop.right;
    }
    this.inOrderAnimation();
  }

  inOrderAnimation() {
    let timer = setInterval(() => {     
      let action = this.animationNodes.shift();
      if (action) {
          this.treeService.nodes.forEach((node) => {
            if (this.animationNodes.length <= 0) {
              node.colour = 'green';
              this.highlightNode(node);
            }
            else if (node.data == action.data) {
              node.colour = this.coloursEnum.SELECTED;
              this.highlightNode(node);
              this.visitedNodes.push(node);
            }
            else if (this.visitedNodes.includes(node)) {
              node.colour = 'green';
              this.highlightNode(node);
            }
            else {
              node.colour = 'white';
              this.highlightNode(node);
            }
          })
      }
      else {
        clearInterval(timer);
      }
    }, this.treeService.animationSpeed)
    

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
}
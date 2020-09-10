import { TreeNode } from '../../shared/models/TreeNode';
import { BinaryTreeComponent } from '../binary-tree.component';
import { BinaryTreeService } from '../../shared/binary-tree.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Colours } from '../../shared/colours.enum';

export class PreOrder {

  animationNodes = [];
  coloursEnum = Colours;
  ctx: CanvasRenderingContext2D;
  canvas: ElementRef<HTMLCanvasElement>;

  constructor(public treeService:  BinaryTreeService, ctx: CanvasRenderingContext2D, canvas:  ElementRef<HTMLCanvasElement>) {
    this.ctx = ctx;
    this.canvas = canvas;
   }

  preOrderTraversal(root: TreeNode) {
    let stack = [];

    stack.push(root);
    while (stack.length > 0) {
      let pop = stack.pop();
      if (pop) {
        this.animationNodes.push(pop);
        stack.push(pop.right);
        stack.push(pop.left);
      }
    }
    this.preOrderAnimation();
  }

  preOrderAnimation() {

    const bt = new BinaryTreeComponent(this.treeService);   

    let timer = setInterval(() => {     
      let action = this.animationNodes.shift();
      if (action) {
          console.log(action.data);
          this.treeService.nodes.forEach((node) => {
            if (node.data == action.data) {
              node.colour = this.coloursEnum.TARGET;
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
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-binary-tree',
  templateUrl: './binary-tree.component.html',
  styleUrls: ['./binary-tree.component.scss']
})
export class BinaryTreeComponent implements OnInit {

  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  // The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, 
  // or null if the context identifier is not supported, or the canvas has already been set to a different context mode.
  // Later calls to this method on the same canvas element, with the same contextType argument, 
  // will always return the same drawing context instance as was returned the first time the method was invoked. 
  // It is not possible to get a different drawing context object on a given canvas element.

  private ctx: CanvasRenderingContext2D;

  constructor() { }

  ngOnInit(): void {

    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = "yellow";
    this.ctx.fillRect(0, 0, 1000, 400);

    for (let i = 0; i < 10; i++) {
      this.ctx.fillStyle = "red";
      this.ctx.beginPath();
      this.ctx.arc((100 * i) % 1000, 100, 30, 0, 90); //CanvasPath.arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean)
      this.ctx.stroke();
      this.ctx.font = "30px Arial";
      this.ctx.fillText("4", (97 * i) % 1000, 110);
    }
  }

}

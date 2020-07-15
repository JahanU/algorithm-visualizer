import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorithm-visualizer',
  templateUrl: './algorithm-visualizer.component.html',
  styleUrls: ['./algorithm-visualizer.component.scss']
})
export class AlgorithmVisualizerComponent implements OnInit {

  numbers: number[];

  constructor() {
    this.numbers = [];
  }

  ngOnInit(): void {
    this.resetArray();
  }

  resetArray() {
    this.numbers = [];
    for (let i = 0; i < 10; i++) {
      this.numbers.push(this.randomInteger(5, 700));
    }
    console.log('unsorted: ', this.numbers);
  }

  randomInteger(min, max) {
    https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async bubbleSort() {
    for (let i = 0; i < this.numbers.length; i++) {
      for (let j = i; j < this.numbers.length; j++) {
        await this.sleep(0.1);
        if (this.numbers[i] < this.numbers[j]) {
          let temp = this.numbers[j];
          this.numbers[j] = this.numbers[i];
          this.numbers[i] = temp;
        }
      }
    }

  }

  sleep(duration) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, duration * 1000)
    })
  }
}


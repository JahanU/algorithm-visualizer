import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-algorithm-visualizer',
  templateUrl: './algorithm-visualizer.component.html',
  styleUrls: ['./algorithm-visualizer.component.scss']
})
export class AlgorithmVisualizerComponent implements OnInit {

  numbers: number[];
  unsortedNumbers: number[];
  outerValue: number;
  innerValue: number;

  swapped: boolean;

  constructor() {
    this.numbers = [];
    this.unsortedNumbers = [];
    this.outerValue = 0;
    this.innerValue = 0;
    this.swapped = false;
  }

  ngOnInit(): void {
    this.resetArray();
  }

  resetArray() {
    this.numbers = [];
    this.unsortedNumbers = [];
    for (let i = 0; i < 3; i++) {
      let randInt = this.randomInteger(15, 200);
      this.numbers.push(randInt);
      this.unsortedNumbers.push(randInt);
    }
  }

  randomInteger(min, max) {
    https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  setBarColors(value: number) {
    if (this.isArraySorted()) {
      return 'purple';
    }
    if (this.swapped) {
      if (value == this.outerValue || value == this.innerValue) {
        return 'pink';
      }
    }
    if (value == this.outerValue) {
      return 'red';
    }
    if (value == this.innerValue) {
      return 'green';
    }
  }

  isArraySorted() {
    this.unsortedNumbers.sort((a, b) => a - b);
    for (let i = 0; i < this.unsortedNumbers.length; i++) {
      if (this.unsortedNumbers[i] !== this.numbers[i])
        return false;
    }
    return true;
  }


  sleep(duration) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, duration * 1000)
    })
  }


  async bubbleSort() {
    for (let i = 0; i < this.numbers.length; i++) {
      this.outerValue = this.numbers[i];
      await this.sleep(1);

      for (let j = i; j < this.numbers.length; j++) {
        this.innerValue = this.numbers[j];
        await this.sleep(1);

        if (this.numbers[i] > this.numbers[j]) {
          this.swapped = true;
          await this.sleep(1);

          let temp = this.numbers[j];
          this.numbers[j] = this.numbers[i];
          this.numbers[i] = temp;

          await this.sleep(1);
          this.swapped = false;

        }
      }
    }
  }


}


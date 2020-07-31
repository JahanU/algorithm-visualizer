import { Component, OnInit } from '@angular/core';
import { MergeSort } from './algorithms/merge-sort';
// import { BubbleSort } from './algorithms/bubble-sort';
import { BubbleSort } from './algorithms/bubble-sort';

@Component({
  selector: 'app-algorithm-visualizer',
  templateUrl: './algorithm-visualizer.component.html',
  styleUrls: ['./algorithm-visualizer.component.scss']
})
export class AlgorithmVisualizerComponent implements OnInit {

  numbers: number[];
  unsortedNumbers: number[];
  animations;
  slowAnimations = [];
  binDimensions = [];


  constructor() {
    this.numbers = [];
    this.unsortedNumbers = [];
  }

  ngOnInit(): void {
    this.resetArray();
  }

  resetArray() {
    this.numbers = [];
    this.unsortedNumbers = [];
    for (let i = 0; i < 30; i++) {
      let randInt = this.randomInteger(15, 400);
      this.numbers.push(randInt);
      this.unsortedNumbers.push(randInt);
    }
  }

  randomInteger(min, max) {
    https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  isArraySorted() {
    this.unsortedNumbers.sort((a, b) => a - b);
    for (let i = 0; i < this.unsortedNumbers.length; i++) {
      if (this.unsortedNumbers[i] !== this.numbers[i])
        return false;
    }
    return true;
  }

  setBarPurple() {
    return 'purple';
  }

  setBarColors() {
    if (this.isArraySorted()) {
      return 'purple';
    }
    return 'rgb(9, 168, 168)';
  }

  bubbleSort() {
    let bubble = new BubbleSort();
    let inputCopy = [...this.numbers];
    this.animations = bubble.bubbleSort(inputCopy);
    console.log('animation array: ', this.animations);
    console.log(this.animations); // contains all index's elements we swap
    this.bubbleSortAnimation();
  }


  bubbleSortAnimation() {

    if (this.animations) { // have animations
      const timer = setInterval(() => {
        let action = this.animations.shift();
        if (action) {
          let temp = this.numbers[action[0]];
          this.numbers[action[0]] = this.numbers[action[1]];
          this.numbers[action[1]] = temp;
        }
        else {
          clearInterval(timer);
          console.log('sorted numbers: ', this.numbers);
        }
      }, 10);
    }
  }


  // mergeSort() {
  //   let sort: MergeSort = new MergeSort();
  //   sort.sort(this.numbers);
  //   console.log('sorted: ', this.numbers);
  // }



}


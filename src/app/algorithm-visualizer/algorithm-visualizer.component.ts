import { Component, OnInit } from '@angular/core';
import { MergeSort } from './algorithms/merge-sort';
import { BubbleSort } from './algorithms/bubble-sort';

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


  bubbleSort() {
    let bubbleSort: BubbleSort = new BubbleSort();
    bubbleSort.bubbleSort(this.numbers);
    console.log('sorted: ', this.numbers);
  }

  mergeSort() {
    let sort: MergeSort = new MergeSort();
    sort.sort(this.numbers);
    console.log('sorted: ', this.numbers);
  }



}


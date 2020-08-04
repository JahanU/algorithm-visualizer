import { Injectable } from '@angular/core';
import { ArrayBars } from '../models/ArrayBars';
@Injectable({
  providedIn: 'root',
})
export class ArraysService {
  ARRAY_LENGTH = 25;
  ANIMATION_SPEED = 1;
  completedAnimation = [];
  numbers: ArrayBars[];

  constructor() {}

  resetArray() {
    this.numbers = [];
    for (let i = 0; i < this.ARRAY_LENGTH; i++) {
      let randInt = this.randomInteger(15, 800);
      this.numbers.push({ value: randInt, colour: '' });
    }
  }

  randomInteger(min, max) {
    //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  isArraySorted(array: ArrayBars[]) {
    let numCopy = [...array];
    numCopy.sort((a, b) => a.value - b.value);

    console.log('sorted num copy: ', numCopy);
    console.log('unsorted array: ', array);

    for (let i = 0; i < numCopy.length; i++) {
      if (numCopy[i].value !== array[i].value) return false;
    }

    console.log('sorted!');
    return true;
  }

  getIsArraySorted() {
    return this.isArraySorted(this.numbers);
  }
}

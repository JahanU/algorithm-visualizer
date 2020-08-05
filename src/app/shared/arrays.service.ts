import { Injectable } from '@angular/core';
import { ArrayBars } from '../models/ArrayBars';
@Injectable({
  providedIn: 'root',
})
export class ArraysService {
  ARRAY_LENGTH = 20;
  ANIMATION_SPEED = 10;
  completedAnimation = [];
  numbers: ArrayBars[];

  constructor() {}

  resetArray() {
    this.numbers = [];
    for (let i = 0; i < this.ARRAY_LENGTH; i++) {
      let randInt = this.randomInteger(15, 800);
      this.numbers.push({ value: randInt, colour: 'rgb(9, 168, 168)' });
    }
  }

  randomInteger(min, max) {
    //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  isArraySorted(array: ArrayBars[]) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i].value > array[i + 1].value) {
        return false;
      }
      this.completedAnimation.push({ index: i });
    }
    this.completedAnimation.push({ index: array.length - 1 }); // Append last index

    console.log('array is sorted');
    console.log(this.completedAnimation);
    return true;
  }

  animateSortedArray() {
    const timer = setInterval(() => {
      const action = this.completedAnimation.shift();
      if (action) {
        this.numbers[action.index].colour = 'purple';
      } else {
        clearInterval(timer);
      }
    }, 40);
  }
}

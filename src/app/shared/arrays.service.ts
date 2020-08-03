import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArraysService {

  numbers: number[];

  constructor() { }


  resetArray() {
    this.numbers = [];
    for (let i = 0; i < 20; i++) {
      let randInt = this.randomInteger(15, 400);
      this.numbers.push(randInt);
    }
  }

  randomInteger(min, max) {
    //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  isArraySorted(array: number[]) {
    let numCopy = [...array];
    numCopy.sort((a, b) => a - b);
    for (let i = 0; i < numCopy.length; i++) {
      if (numCopy[i] !== array[i])
        return false;
    }
    return true;
  }

  getIsArraySorted() {
    return this.isArraySorted(this.numbers);
  }


}
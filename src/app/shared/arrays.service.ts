import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArraysService {

  numbers: number[];
  unsortedNumbers: number[];

  constructor() { }


  resetArray() {
    this.numbers = [];
    this.unsortedNumbers = [];
    for (let i = 0; i < 20; i++) {
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
}

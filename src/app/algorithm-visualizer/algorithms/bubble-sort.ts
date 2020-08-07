import { Output } from '@angular/core';
import { AlgorithmVisualizerComponent } from '../algorithm-visualizer.component';
import { ArraysService } from 'src/app/shared/arrays.service';
import { ArrayBars } from 'src/app/models/ArrayBars';

export class BubbleSort {
  animations = [];
  constructor(private readonly arrService: ArraysService) {}

  bubbleSort(array: ArrayBars[]) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j].value > array[j + 1].value) {
          this.animations.push([j, j + 1]);
          this.swap(array, j, j + 1);
        }
      }
    }
  }

  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  bubbleSortAnimation() {
    const timer = setInterval(() => {
      let action = this.animations.shift();
      if (action) {
        let temp = this.arrService.numbers[action[0]];
        this.arrService.numbers[action[0]] = this.arrService.numbers[action[1]];
        this.arrService.numbers[action[1]] = temp;
      } else {
        clearInterval(timer);
        this.arrService.isArraySorted(this.arrService.numbers);
        this.arrService.animateSortedArray();
      }
    }, this.arrService.animationSpeed);
  }
}

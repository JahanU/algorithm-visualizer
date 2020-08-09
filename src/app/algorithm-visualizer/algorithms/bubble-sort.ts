import { ArraysService } from 'src/app/shared/arrays.service';
import { ArrayBars } from 'src/app/models/ArrayBars';

export class BubbleSort {
  animations: animationValues[] = [];

  constructor(private readonly arrService: ArraysService) { }

  bubbleSort(array: ArrayBars[]): void {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i; j < array.length - i - 1; j++) {
        if (array[j].value > array[j + 1].value) {
          this.animations.push({ leftIndex: j, rightIndex: j + 1 });
          this.arrService.swap(array, j, j + 1);
        }
      }
    }
  }

  bubbleSortAnimation(): void {
    const timer = setInterval(() => {
      const action: animationValues = this.animations.shift();
      if (action)
        this.arrService.swap(this.arrService.numbers, action.leftIndex, action.rightIndex);
      else {
        clearInterval(timer);
        if (this.arrService.isArraySorted(this.arrService.numbers))
          this.arrService.animateSortedArray();
      }
    }, this.arrService.animationSpeed);
  }
}

interface animationValues {
  leftIndex: number;
  rightIndex: number;
}

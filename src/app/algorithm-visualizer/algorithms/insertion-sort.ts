import { ArraysService } from 'src/app/shared/arrays.service';
import { ArrayBars } from 'src/app/models/ArrayBars';

export class InsertionSort {
  animations: animationValues[] = [];

  constructor(private readonly arrService: ArraysService) { }

  insertionSort(arr: ArrayBars[]): void {
    for (let outer = 1; outer < arr.length; outer++) {
      let inner = outer;

      while (inner > 0 && arr[inner - 1].value > arr[inner].value) { // If previous value is greater, cascasde the value back to its correct index.
        this.animations.push({ rightIndex: inner, leftIndex: inner - 1 });
        this.arrService.swap(arr, inner, inner - 1);
        inner--;
      }
    }
  }


  insertionSortAnimation() {
    this.arrService.sortingAnimationsMax = this.animations.length;
    const timer = setInterval(() => {
      const action: animationValues = this.animations.shift();
      this.arrService.sortingAnimationsLeft = this.animations.length;
      if (action)
        this.arrService.swap(this.arrService.numbers, action.leftIndex, action.rightIndex);

      else {
        clearInterval(timer);
        if (this.arrService.isArraySorted(this.arrService.numbers)) {
          this.arrService.animateSortedArray();
          this.arrService.sorting = false;
        }
      }
    }, this.arrService.animationSpeed)


  }
}

interface animationValues {
  leftIndex: number;
  rightIndex: number;
}

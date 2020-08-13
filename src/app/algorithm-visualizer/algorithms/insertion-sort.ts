import { ArraysService } from 'src/app/shared/arrays.service';
import { ArrayBars } from 'src/app/models/ArrayBars';

export class InsertionSort {
  animations: animationValues[] = [];

  constructor(private readonly arrService: ArraysService) { }

  insertionSort(arr: ArrayBars[]): void {
    for (let outer = 1; outer < arr.length; outer++) {
      let inner = outer;
      this.animations.push({ rightIndex: null, leftIndex: null, index: inner });

      while (inner > 0 && arr[inner - 1].value > arr[inner].value) { // If previous value is greater, cascasde the value back to its correct index.
        this.animations.push({ rightIndex: inner, leftIndex: inner - 1, index: null });
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
      if (action) {
        this.arrService.numbers.map((num) => (num.colour = this.arrService.$primaryBars));

        if (action.index != null)
          this.arrService.numbers[action.index].colour = this.arrService.$selectedIndex;
        else {
          this.arrService.numbers[action.leftIndex].colour = this.arrService.$swappedIndex;
          this.arrService.numbers[action.rightIndex].colour = this.arrService.$swappedIndex;
          this.arrService.swap(this.arrService.numbers, action.leftIndex, action.rightIndex);
        }
      }
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
  index: number;
}

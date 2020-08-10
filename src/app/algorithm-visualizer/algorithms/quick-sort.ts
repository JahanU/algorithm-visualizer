import { ArraysService } from '../../shared/arrays.service';
import { ArrayBars } from '../../models/ArrayBars';

export class QuickSort {
  animations: animationValues[] = [];

  constructor(private readonly arrService: ArraysService) { }

  quickSort(arr: ArrayBars[]): void {
    // Edge case:
    /* 
    If the array is already sorted, then we do not need to perform quicksort.
    The reason this check is needed, is because quicksort will still be performed
    on the sorted array, thus making the time complexity o(N^2), but by performing 
    a simple o(N) check condition, we can then get the average case: o(n log(n))
    */
    if (this.arrService.isArraySorted(arr))
      return;
    else
      this.sort(arr, 0, arr.length - 1);

  }

  sort(arr: ArrayBars[], left: number, right: number): void {
    if (left < right) {
      // partitioning index, arr[pi] correct place?
      let pi = this.partition(arr, left, right);

      // Recursively sort elements before/after partition
      this.sort(arr, left, pi - 1);
      this.sort(arr, pi + 1, right);
    }
  }

  partition(arr: ArrayBars[], left: number, right: number): number {

    const pivotValue = arr[right].value; // pivot set to last element
    let low = left - 1; // left/low index

    for (let i = left; i < right; i++) {
      if (arr[i].value < pivotValue) {
        low++;
        this.animations.push({ leftIndex: low, index: i, pivot: right });
        this.arrService.swap(arr, low, i);
      }
    }
    this.animations.push({ leftIndex: low + 1, index: right, pivot: right });
    this.arrService.swap(arr, low + 1, right);

    return low + 1;
  }

  quickSortAnimation(): void {
    this.arrService.sortingAnimationsMax = this.animations.length;
    const timer = setInterval(() => {
      const action: animationValues = this.animations.shift();
      this.arrService.sortingAnimationsLeft = this.animations.length;
      if (action) {
        // Pivot
        this.arrService.numbers.map((num) => (num.colour = '#09A8A8'));
        this.arrService.numbers[action.pivot].colour = 'red';

        this.arrService.swap(this.arrService.numbers, action.leftIndex, action.index);
      } else {
        clearInterval(timer);
        if (this.arrService.isArraySorted(this.arrService.numbers)) {
          this.arrService.animateSortedArray();
          this.arrService.sorting = false;
        }
      }
    }, this.arrService.animationSpeed);
  }
}

interface animationValues {
  leftIndex: number;
  index: number;
  pivot: number;
}

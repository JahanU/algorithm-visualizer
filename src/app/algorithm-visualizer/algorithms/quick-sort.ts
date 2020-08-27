import { ArraysService } from '../../shared/arrays.service';
import { ArrayBars } from 'src/app/shared/models/ArrayBars';

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
      this.animations.push({ leftIndex: i, rightIndex: i, pivot: right, isSwapping: false });

      if (arr[i].value < pivotValue) {
        low++;
        this.animations.push({ leftIndex: low, rightIndex: i, pivot: right, isSwapping: true });
        this.arrService.swap(arr, low, i);
      }
    }
    this.animations.push({ leftIndex: low + 1, rightIndex: right, pivot: right, isSwapping: true });
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
        this.arrService.numbers.map((num) => (num.colour = this.arrService.$primaryBars));
        this.arrService.numbers[action.pivot].colour = 'orange';

        if (action.isSwapping == false) {
          this.arrService.numbers[action.leftIndex].colour = this.arrService.$selectedIndex;
          this.arrService.numbers[action.rightIndex].colour = this.arrService.$selectedIndex;
        }
        else {
          this.arrService.numbers[action.leftIndex].colour = this.arrService.$swappedIndex;
          this.arrService.numbers[action.rightIndex].colour = this.arrService.$swappedIndex;
          this.arrService.swap(this.arrService.numbers, action.leftIndex, action.rightIndex);
        }
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
  rightIndex: number;
  pivot: number;
  isSwapping: boolean;
}

import { ArraysService } from '../../shared/arrays.service';

export class QuickSort {
  animations = [];

  constructor(private readonly arrService: ArraysService) {}

  quickSort(arr) {
    // Edge case:
    /* 
    If the array is already sorted, then we do not need to perform quicksort.
    The reason this check is needed, is because quicksort will still be performed
    on the sorted array, thus making the time complexity o(N^2), but by performing 
    a simple o(N) check condition, we can then get the average case: o(n log(n))
    */
    if (this.arrService.isArraySorted(arr)) {
      return;
    } else {
      this.sort(arr, 0, arr.length - 1);
    }
  }

  sort(arr, low, high) {
    if (low < high) {
      // partitioning index, arr[pi] correct place?
      let pi = this.partition(arr, low, high);

      // Recursively sort elements before/after partition
      this.sort(arr, low, pi - 1);
      this.sort(arr, pi + 1, high);
    }
  }

  partition(arr, left, high) {
    let pivotValue = arr[high].value; // pivot set to last element
    let leftIndex = left - 1; // left/low index

    for (let i = left; i < high; i++) {
      // low to high

      if (arr[i].value < pivotValue) {
        leftIndex++;
        this.animations.push({ low: leftIndex, index: i, pivot: high });
        this.swap(arr, leftIndex, i);
      }
    }

    this.animations.push({ low: leftIndex + 1, index: high, pivot: high });
    this.swap(arr, leftIndex + 1, high);

    return leftIndex + 1;
  }

  swap(arr, left, right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }

  quickSortAnimation() {
    const timer = setInterval(() => {
      const action: animationValues = this.animations.shift();
      console.log(action);
      if (action) {
        // Pivot
        this.arrService.numbers.map((num) => (num.colour = '#09A8A8'));
        this.arrService.numbers[action.pivot].colour = 'red';

        // swap
        let temp = this.arrService.numbers[action.low];
        this.arrService.numbers[action.low] = this.arrService.numbers[
          action.index
        ];
        this.arrService.numbers[action.index] = temp;
      } else {
        clearInterval(timer);
        this.arrService.isArraySorted(this.arrService.numbers);
        this.arrService.animateSortedArray();
      }
    }, this.arrService.animationSpeed);
  }
}

interface animationValues {
  low: number;
  index: number;
  pivot: number;
}

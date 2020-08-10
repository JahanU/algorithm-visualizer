import { ArraysService } from 'src/app/shared/arrays.service';
import { ArrayBars } from 'src/app/models/ArrayBars';

export class MergeSort {
  animations: animationValues[] = []; // Stores array objects => { key, value }

  constructor(private readonly arrService: ArraysService) { }

  mergeSort(array: ArrayBars[], left: number, right: number): void {
    if (right <= left) {
      return;
    }

    let mid = Math.floor((left + right) / 2);
    this.mergeSort(array, left, mid); // Sort left side of the array, 0 to mid
    this.mergeSort(array, mid + 1, right); // mid to end
    this.merge(array, left, mid, right);
  }

  merge(array, left, mid, right): void {
    let aux = [...array];
    let midIndex = mid + 1;
    let leftIndex = left;

    for (let k = leftIndex; k <= right; k++) {
      if (leftIndex > mid) {
        this.animations.push({ index: k, value: aux[midIndex].value });
        array[k] = aux[midIndex++];
      } else if (midIndex > right) {
        this.animations.push({ index: k, value: aux[leftIndex].value });
        array[k] = aux[leftIndex++];
      } else if (aux[leftIndex].value > aux[midIndex].value) {
        this.animations.push({ index: k, value: aux[midIndex].value });
        array[k] = aux[midIndex++];
      } else {
        this.animations.push({ index: k, value: aux[leftIndex].value });
        array[k] = aux[leftIndex++];
      }
    }
  }

  mergeSortAnimation(): void {
    this.arrService.sortingAnimationsMax = this.animations.length;
    let timer = setInterval(() => {
      const action: animationValues = this.animations.shift();
      this.arrService.sortingAnimationsLeft = this.animations.length;
      if (action)
        this.arrService.numbers[action.index].value = action.value;
      else {
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
  index: number;
  value: number;
}

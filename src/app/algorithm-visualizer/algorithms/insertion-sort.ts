import { ArraysService } from 'src/app/shared/arrays.service';
import { ArrayBars } from 'src/app/models/ArrayBars';

export class InsertionSort {
  constructor(private readonly arrService: ArraysService) { }

  insertionSort(arr: ArrayBars[]): void {
    for (let outer = 1; outer < arr.length; outer++) {
      let inner = outer;

      while (inner > 0 && arr[inner - 1].value > arr[inner].value) { // If previous value is greater, cascasde the value back to its correct index.
        this.arrService.swap(arr, inner, inner - 1);
        inner--;
      }
    }
  }
}

import { ArraysService } from 'src/app/shared/arrays.service';
import { merge } from 'rxjs';

export class MergeSort {

    animations = [];

    constructor(private readonly arraysService: ArraysService) { }
  

  mergeSort(a, lo, hi) {

    if (hi <= lo) {
      return;
    }

    let mid = Math.floor(lo + (hi - lo) / 2);
    this.mergeSort(a, lo, mid);
    this.mergeSort(a, mid + 1, hi);
    this.merge(a, lo, mid, hi);
  }

 
  merge(a, lo, mid, hi) {
    
    let aux = [...a];
    
    let i = lo;
    let j = mid + 1;
    for (let k = lo; k <= hi; k++) {
    // Case when one subarray has been exhausted. Recursivly sort each array, store the animations
        if (i > mid) {
        // Record the index of the main array and the replaced value.
            this.animations.push([k, aux[j]]);
            a[k] = aux[j++];
        } 
        else if (j > hi) {
            this.animations.push([k, aux[i]]);
            a[k] = aux[i++];
        } 
        else if (aux[i] > aux[j]) {
            // Smaller element replacing element in the main array
            this.animations.push([k, aux[j]]);
            a[k] = aux[j++];
        } 
        else {
            this.animations.push([k, aux[i]]);
            a[k] = aux[i++];
        }
    }
  }

  animateMergeSort() {
    let animation = setInterval(() => {
      const action = this.animations.shift();
      console.log('animations: ', this.animations);
      if (action) {
        this.arraysService.numbers[action[0]] = action[1]; // Index value = array value
      } else {
        clearInterval(animation);
      }
    }, 30);
  }



}

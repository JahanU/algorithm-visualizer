import { Output } from '@angular/core';

export class BubbleSort {

    animations = [];

    constructor() { }


    bubbleSort(array) {
        for (let i = array.length - 1; i > 0; i--) {
            this.bubbleMain(array, 0, i);
        }
        return this.animations;
    }

    bubbleMain(array, lo, hi) {
        for (let i = lo; i < hi; i++) {
            if (array[i] > array[i + 1]) {
                this.animations.push([i, i + 1]);
                this.swap(array, i, i + 1);
            }
        }
    }

    swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

}




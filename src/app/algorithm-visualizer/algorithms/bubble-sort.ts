import { Output } from '@angular/core';
import { AlgorithmVisualizerComponent } from '../algorithm-visualizer.component';
import { ArraysService } from 'src/app/shared/arrays.service';
export class BubbleSort {

    animations = [];

    constructor(private readonly arraysService: ArraysService) { }


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

    bubbleSortAnimation() {
        if (this.animations) { // have animations
            const timer = setInterval(() => {
                let action = this.animations.shift();
                if (action) {
                    let temp = this.arraysService.numbers[action[0]];
                    this.arraysService.numbers[action[0]] = this.arraysService.numbers[action[1]];
                    this.arraysService.numbers[action[1]] = temp;
                }
                else {
                    clearInterval(timer);
                }
            }, 30);
        }
    }


}




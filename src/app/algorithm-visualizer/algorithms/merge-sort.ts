import { ArraysService } from 'src/app/shared/arrays.service';
import { merge } from 'rxjs';

export class MergeSort {

    animations = [];

    constructor(private readonly arraysService: ArraysService) { }
    /**
     * Starts the soring process.
     *
     * @method sort
     * @param {Array} arry The array to be sorted.
     */
    mergeSort(array: number[], arrayLength: number) {

        if (arrayLength < 2) {
            return;
        }

        let middle = Math.floor(arrayLength / 2);
        let end = arrayLength - middle;

        let leftArray = [];
        let rightArray = [];

        for (let i = 0; i < middle; i++)
            leftArray[i] = array[i];

        for (let i = middle; i < arrayLength; i++)
            rightArray[i - middle] = array[i];

        this.mergeSort(leftArray, middle);
        this.mergeSort(rightArray, end);
        this.merge(array, leftArray, rightArray, middle, end);
    }

    merge(array: number[], leftArray: number[], rightArray: number[], middle: number, end: number) {

        let leftIndex = 0;
        let rightIndex = 0;
        let index = 0;

        while (leftIndex < middle && rightIndex < end) {
            if (leftArray[leftIndex] <= rightArray[rightIndex]) {
                array[index++] = leftArray[leftIndex++];
            }
            else {
                array[index++] = rightArray[rightIndex++];
            }
        }

        while (leftIndex < middle) {
            array[index++] = leftArray[leftIndex++];
        }
        while (rightIndex < end) {
            array[index++] = rightArray[rightIndex++];
        }

        return array;

    }

    /**
     * Recursively sorts and calls merge.
     *
     * @method mergeSort
     * @param {Array} arr The array to be sorted.
     */




}

import { Output } from '@angular/core';

export class BubbleSort {

    @Output() outerValue: number;
    innerValue: number;
    swapped: boolean;

    constructor() { }


    async bubbleSort(array: number[]) {

        for (let i = 0; i < array.length; i++) {
            this.outerValue = array[i];
            await this.sleep(1);

            for (let j = i; j < array.length; j++) {
                this.innerValue = array[j];
                await this.sleep(1);

                if (array[i] > array[j]) {
                    this.swapped = true;
                    await this.sleep(1);

                    let temp = array[j];
                    array[j] = array[i];
                    array[i] = temp;

                    await this.sleep(1);
                    this.swapped = false;
                }
            }
        }
    }


    sleep(duration) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, duration * 1000)
        })
    }


}
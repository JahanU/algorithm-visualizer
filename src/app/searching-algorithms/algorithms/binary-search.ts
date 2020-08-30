import { ArrayBars } from '../../shared/models/ArrayBars';
import { ArraysService } from '../../shared/arrays.service';

export class BinarySearch {

    animations: AnimationValues[] = [];

    constructor(private readonly arrService: ArraysService) { }

    // param = [arr];
    binarySearch(arr: ArrayBars[], target: number): number {

        let left = 0;
        let right = arr.length - 1;

        while (left <= right) {

            const mid = Math.floor((left + (right - left) / 2));

            this.animations.push({ selectedIndex: mid, disabledIndexs: null });

            if (arr[mid].value === target) {
                this.animations.push({ selectedIndex: mid, disabledIndexs: null });
                return mid;
            }
            if (arr[mid].value < target) { // Values is on the right side, ignore the left side
                this.animations.push({ selectedIndex: null, disabledIndexs: this.getIndexRange(left, mid) });
                left = mid + 1;
            }
            else {
                this.animations.push({ selectedIndex: null, disabledIndexs: this.getIndexRange(mid, right) });
                right = mid - 1;
            }
        }
        console.log('cannot find target');
        return -1; // Cannot find target
    }

    getIndexRange(left: number, right: number): number[] {
        const indexes: number[] = [];
        for (let i = left; i <= right; i++)
            indexes.push(i);
        return indexes;
    }

    binarySearchAnimation(): void {
        this.arrService.sortingAnimationsMax = this.animations.length;
        const timer = setInterval(() => {
            const action = this.animations.shift();
            this.arrService.sortingAnimationsLeft = this.animations.length;
            if (action) {
                if (action.selectedIndex && this.animations.length === 0) // Last index, animation is finished
                    this.arrService.numbers[action.selectedIndex].colour = this.arrService.$finishedBars;
                else if (action.selectedIndex)
                    this.arrService.numbers[action.selectedIndex].colour = this.arrService.$selectedIndex;
                else
                    action.disabledIndexs.map((num) => this.arrService.numbers[num].colour = '#DCDCDC');
            }
            else {
                clearInterval(timer);
                if (this.arrService.isArraySorted(this.arrService.numbers))
                    this.arrService.sorting = false;

            }
        }, this.arrService.animationSpeed);
    }


}

export class AnimationValues {
    selectedIndex: number;
    disabledIndexs: number[];
}
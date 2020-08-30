import { ArrayBars } from '../../shared/models/ArrayBars';
import { ArraysService } from '../../shared/arrays.service';

export class LinearSearch {

    animations: AnimationValues[] = [];

    constructor(private readonly arrService: ArraysService) { }

    linearSearch(arr: ArrayBars[], target: number): number {
        for (let i = 0; i < arr.length; i++) {
            this.animations.push({ selectedIndex: i });
            if (arr[i].value === target) {
                this.animations.push({ selectedIndex: i });
                return i;
            }
        }
    }

    linearSearchAnimation(): void {
        this.arrService.sortingAnimationsMax = this.animations.length;
        const timer = setInterval(() => {
            const action = this.animations.shift();
            this.arrService.sortingAnimationsLeft = this.animations.length;
            if (action) {
                this.arrService.numbers[action.selectedIndex].colour = this.arrService.$selectedIndex;
            }
            else {
                clearInterval(timer);
                if (this.arrService.isArraySorted(this.arrService.numbers)) {
                    this.arrService.sorting = false;
                }
            }
        }, this.arrService.animationSpeed);
    }
}

export class AnimationValues {
    selectedIndex: number;
}
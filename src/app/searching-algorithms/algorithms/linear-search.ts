import { ArrayBars } from '../../shared/models/ArrayBars';
import { ArraysService } from '../../shared/arrays.service';

export class LinearSearch {

    animations: animationValues[] = [];

    constructor(private readonly arrService: ArraysService) { }

    // linear searching
    linearSearch(arr: ArrayBars[], target: number) {
        for (let i = 0; i < arr.length; i++) {
            this.animations.push({ selectedIndex: i });
            if (arr[i].value === target) {
                this.animations.push({ selectedIndex: i });
                return i;
            }
        }
    }

    // linear animation
    linearSearchAnimation() {
        this.arrService.sortingAnimationsMax = this.animations.length;
        const timer = setInterval(() => {
            let action = this.animations.shift();
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

export class animationValues {
    selectedIndex: number;
}
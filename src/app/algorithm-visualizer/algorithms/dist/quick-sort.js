"use strict";
exports.__esModule = true;
exports.QuickSort = void 0;
var QuickSort = /** @class */ (function () {
    function QuickSort(arrService) {
        this.arrService = arrService;
        this.animations = [];
    }
    QuickSort.prototype.quickSort = function (arr) {
        // Edge case:
        /*
        If the array is already sorted, then we do not need to perform quicksort.
        The reason this check is needed, is because quicksort will still be performed
        on the sorted array, thus making the time complexity o(N^2), but by performing
        a simple o(N) check condition, we can then get the average case: o(n log(n))
        */
        if (this.arrService.isArraySorted(arr))
            return;
        else
            this.sort(arr, 0, arr.length - 1);
    };
    QuickSort.prototype.sort = function (arr, left, right) {
        if (left < right) {
            // partitioning index, arr[pi] correct place?
            var pi = this.partition(arr, left, right);
            // Recursively sort elements before/after partition
            this.sort(arr, left, pi - 1);
            this.sort(arr, pi + 1, right);
        }
    };
    QuickSort.prototype.partition = function (arr, left, right) {
        var pivotValue = arr[right].value; // pivot set to last element
        var low = left - 1; // left/low index
        for (var i = left; i < right; i++) {
            this.animations.push({ leftIndex: i, rightIndex: i, pivot: right, isSwapping: false });
            if (arr[i].value < pivotValue) {
                low++;
                this.animations.push({ leftIndex: low, rightIndex: i, pivot: right, isSwapping: true });
                this.arrService.swap(arr, low, i);
            }
        }
        this.animations.push({ leftIndex: low + 1, rightIndex: right, pivot: right, isSwapping: true });
        this.arrService.swap(arr, low + 1, right);
        return low + 1;
    };
    QuickSort.prototype.quickSortAnimation = function () {
        var _this = this;
        this.arrService.sortingAnimationsMax = this.animations.length;
        var timer = setInterval(function () {
            var action = _this.animations.shift();
            _this.arrService.sortingAnimationsLeft = _this.animations.length;
            if (action) {
                // Pivot
                _this.arrService.numbers.map(function (num) { return (num.colour = _this.arrService.$primaryBars); });
                _this.arrService.numbers[action.pivot].colour = 'orange';
                if (action.isSwapping == false) {
                    _this.arrService.numbers[action.leftIndex].colour = _this.arrService.$selectedIndex;
                    _this.arrService.numbers[action.rightIndex].colour = _this.arrService.$selectedIndex;
                }
                else {
                    _this.arrService.numbers[action.leftIndex].colour = _this.arrService.$swappedIndex;
                    _this.arrService.numbers[action.rightIndex].colour = _this.arrService.$swappedIndex;
                    _this.arrService.swap(_this.arrService.numbers, action.leftIndex, action.rightIndex);
                }
            }
            else {
                clearInterval(timer);
                if (_this.arrService.isArraySorted(_this.arrService.numbers)) {
                    _this.arrService.animateSortedArray();
                    _this.arrService.sorting = false;
                }
            }
        }, this.arrService.animationSpeed);
    };
    return QuickSort;
}());
exports.QuickSort = QuickSort;

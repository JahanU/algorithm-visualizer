"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.MergeSort = void 0;
var MergeSort = /** @class */ (function () {
    function MergeSort(arrService) {
        this.arrService = arrService;
        this.animations = []; // Stores array objects => { key, value }
    }
    MergeSort.prototype.mergeSort = function (array, left, right) {
        if (right <= left) {
            return;
        }
        var mid = Math.floor((left + right) / 2);
        this.mergeSort(array, left, mid); // Sort left side of the array, 0 to mid
        this.mergeSort(array, mid + 1, right); // mid to end
        this.merge(array, left, mid, right);
    };
    MergeSort.prototype.merge = function (array, left, mid, right) {
        var aux = __spreadArrays(array);
        var midIndex = mid + 1;
        var leftIndex = left;
        for (var k = leftIndex; k <= right; k++) {
            this.animations.push({ index: k, outerIndex: null, value: null });
            if (leftIndex > mid) {
                if (k !== midIndex)
                    this.animations.push({ index: k, outerIndex: midIndex, value: aux[midIndex] });
                array[k] = aux[midIndex++];
            }
            else if (midIndex > right) {
                if (k !== leftIndex)
                    this.animations.push({ index: k, outerIndex: leftIndex, value: aux[leftIndex] });
                array[k] = aux[leftIndex++];
            }
            else if (aux[leftIndex].value > aux[midIndex].value) {
                if (k !== midIndex)
                    this.animations.push({ index: k, outerIndex: midIndex, value: aux[midIndex] });
                array[k] = aux[midIndex++];
            }
            else {
                if (k !== leftIndex)
                    this.animations.push({ index: k, outerIndex: leftIndex, value: aux[leftIndex] });
                array[k] = aux[leftIndex++];
            }
        }
    };
    MergeSort.prototype.mergeSortAnimation = function () {
        var _this = this;
        this.arrService.sortingAnimationsMax = this.animations.length;
        var timer = setInterval(function () {
            var action = _this.animations.shift();
            _this.arrService.sortingAnimationsLeft = _this.animations.length;
            if (action) {
                _this.arrService.numbers.map(function (num) { return (num.colour = _this.arrService.$primaryBars); });
                if (action.outerIndex == null) {
                    _this.arrService.numbers[action.index].colour = _this.arrService.$selectedIndex;
                }
                else {
                    _this.arrService.numbers[action.index].colour = _this.arrService.$swappedIndex;
                    _this.arrService.numbers[action.outerIndex].colour = _this.arrService.$swappedIndex;
                    _this.arrService.numbers[action.index] = action.value;
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
    return MergeSort;
}());
exports.MergeSort = MergeSort;

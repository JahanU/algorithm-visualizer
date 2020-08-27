"use strict";
exports.__esModule = true;
exports.AnimationValues = exports.BinarySearch = void 0;
var BinarySearch = /** @class */ (function () {
    function BinarySearch(arrService) {
        this.arrService = arrService;
        this.animations = [];
    }
    // param = [arr];
    BinarySearch.prototype.binarySearch = function (arr, target) {
        var left = 0;
        var right = arr.length - 1;
        while (left <= right) {
            var mid = Math.floor((left + (right - left) / 2));
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
        return -1; // Cannot find target
    };
    BinarySearch.prototype.getIndexRange = function (left, right) {
        var indexes = [];
        for (var i = left; i <= right; i++)
            indexes.push(i);
        return indexes;
    };
    BinarySearch.prototype.binarySearchAnimation = function () {
        var _this = this;
        this.arrService.sortingAnimationsMax = this.animations.length;
        var timer = setInterval(function () {
            var action = _this.animations.shift();
            if (action) {
                if (action.selectedIndex && _this.animations.length === 0) // Last index, animation is finished
                    _this.arrService.numbers[action.selectedIndex].colour = _this.arrService.$finishedBars;
                else if (action.selectedIndex)
                    _this.arrService.numbers[action.selectedIndex].colour = _this.arrService.$selectedIndex;
                else
                    action.disabledIndexs.map(function (num) { return _this.arrService.numbers[num].colour = '#DCDCDC'; });
            }
            else {
                clearInterval(timer);
                if (_this.arrService.isArraySorted(_this.arrService.numbers))
                    _this.arrService.sorting = false;
            }
        }, this.arrService.animationSpeed);
    };
    return BinarySearch;
}());
exports.BinarySearch = BinarySearch;
var AnimationValues = /** @class */ (function () {
    function AnimationValues() {
    }
    return AnimationValues;
}());
exports.AnimationValues = AnimationValues;

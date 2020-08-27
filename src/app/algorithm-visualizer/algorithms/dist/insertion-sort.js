"use strict";
exports.__esModule = true;
exports.InsertionSort = void 0;
var InsertionSort = /** @class */ (function () {
    function InsertionSort(arrService) {
        this.arrService = arrService;
        this.animations = [];
    }
    InsertionSort.prototype.insertionSort = function (arr) {
        for (var outer = 1; outer < arr.length; outer++) {
            var inner = outer;
            this.animations.push({ rightIndex: null, leftIndex: null, index: inner });
            while (inner > 0 && arr[inner - 1].value > arr[inner].value) { // If previous value is greater, cascasde the value back to its correct index.
                this.animations.push({ rightIndex: inner, leftIndex: inner - 1, index: null });
                this.arrService.swap(arr, inner, inner - 1);
                inner--;
            }
        }
    };
    InsertionSort.prototype.insertionSortAnimation = function () {
        var _this = this;
        this.arrService.sortingAnimationsMax = this.animations.length;
        var timer = setInterval(function () {
            var action = _this.animations.shift();
            _this.arrService.sortingAnimationsLeft = _this.animations.length;
            if (action) {
                _this.arrService.numbers.map(function (num) { return (num.colour = _this.arrService.$primaryBars); });
                if (action.index != null)
                    _this.arrService.numbers[action.index].colour = _this.arrService.$selectedIndex;
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
    return InsertionSort;
}());
exports.InsertionSort = InsertionSort;

"use strict";
exports.__esModule = true;
exports.BubbleSort = void 0;
var BubbleSort = /** @class */ (function () {
    function BubbleSort(arrService) {
        this.arrService = arrService;
        this.animations = [];
    }
    BubbleSort.prototype.bubbleSort = function (array) {
        for (var i = 0; i < array.length - 1; i++) {
            for (var j = 0; j < array.length - i - 1; j++) {
                this.animations.push({ leftIndex: null, rightIndex: null, index: j });
                if (array[j].value > array[j + 1].value) {
                    this.animations.push({ leftIndex: j, rightIndex: j + 1, index: null });
                    this.arrService.swap(array, j, j + 1);
                }
            }
        }
    };
    BubbleSort.prototype.bubbleSortAnimation = function () {
        var _this = this;
        this.arrService.sortingAnimationsMax = this.animations.length;
        var timer = setInterval(function () {
            var action = _this.animations.shift();
            _this.arrService.sortingAnimationsLeft = _this.animations.length;
            if (action) {
                _this.arrService.numbers.map(function (num) { return (num.colour = _this.arrService.$primaryBars); });
                if (action.index != null) {
                    _this.arrService.numbers[action.index].colour = _this.arrService.$selectedIndex;
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
    return BubbleSort;
}());
exports.BubbleSort = BubbleSort;

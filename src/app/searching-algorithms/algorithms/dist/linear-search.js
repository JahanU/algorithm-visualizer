"use strict";
exports.__esModule = true;
exports.animationValues = exports.LinearSearch = void 0;
var LinearSearch = /** @class */ (function () {
    function LinearSearch(arrService) {
        this.arrService = arrService;
        this.animations = [];
    }
    // linear searching
    LinearSearch.prototype.linearSearch = function (arr, target) {
        for (var i = 0; i < arr.length; i++) {
            this.animations.push({ selectedIndex: i });
            if (arr[i].value === target) {
                this.animations.push({ selectedIndex: i });
                return i;
            }
        }
    };
    // linear animation
    LinearSearch.prototype.linearSearchAnimation = function () {
        var _this = this;
        this.arrService.sortingAnimationsMax = this.animations.length;
        var timer = setInterval(function () {
            var action = _this.animations.shift();
            if (action) {
                _this.arrService.numbers[action.selectedIndex].colour = _this.arrService.$selectedIndex;
            }
            else {
                clearInterval(timer);
                if (_this.arrService.isArraySorted(_this.arrService.numbers)) {
                    _this.arrService.sorting = false;
                }
            }
        }, this.arrService.animationSpeed);
    };
    return LinearSearch;
}());
exports.LinearSearch = LinearSearch;
var animationValues = /** @class */ (function () {
    function animationValues() {
    }
    return animationValues;
}());
exports.animationValues = animationValues;

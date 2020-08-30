"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ArraysService = void 0;
var core_1 = require("@angular/core");
var ArraysService = /** @class */ (function () {
    function ArraysService() {
        this.arrayLength = 10;
        this.animationSpeed = 0;
        this.barWidth = 32;
        this.sorting = false;
        this.isSorted = false;
        this.isPaused = false;
        this.$primaryBars = '#0F5257';
        this.$finishedBars = '#9C92A3';
        this.$selectedIndex = 'red';
        this.$swappedIndex = 'green';
        this.$targetIndex = 'orange';
        this.completedAnimation = []; // Iterating the array once last time, to show it is completed
    }
    ArraysService.prototype.resetArray = function () {
        this.numbers = [];
        for (var i = 0; i < this.arrayLength; i++) {
            var randInt = this.randomInteger(20, 200);
            this.numbers.push({ value: randInt, colour: this.$primaryBars, width: this.barWidth });
        }
        this.sortingAnimationsMax = this.sortingAnimationsLeft = this.numbers.length;
        this.isSorted = this.sorting = false;
    };
    ArraysService.prototype.resetArrayNoDups = function () {
        this.numbers = [];
        var i = 0;
        var _loop_1 = function () {
            var randInt = this_1.randomInteger(20, 200);
            var foundDuplicates = this_1.numbers.filter(function (row) { return row.value === randInt; });
            if (foundDuplicates.length > 0)
                return "continue";
            this_1.numbers.push({ value: randInt, colour: this_1.$primaryBars, width: this_1.barWidth });
            i++;
        };
        var this_1 = this;
        while (i < this.arrayLength) {
            _loop_1();
        }
        this.sortingAnimationsMax = this.sortingAnimationsLeft = this.numbers.length;
        this.isSorted = this.sorting = false;
    };
    ArraysService.prototype.randomInteger = function (min, max) {
        //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    ArraysService.prototype.swap = function (arr, left, right) {
        var temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    };
    ArraysService.prototype.sortArray = function () {
        this.numbers.sort(function (a, b) { return a.value - b.value; });
    };
    ArraysService.prototype.isArraySorted = function (array) {
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i].value > array[i + 1].value) {
                return false;
            }
            this.completedAnimation.push({ index: i });
        }
        this.completedAnimation.push({ index: array.length - 1 }); // Append last index
        this.isSorted = true;
        return true;
    };
    ArraysService.prototype.animateSortedArray = function () {
        var _this = this;
        var timer = setInterval(function () {
            var action = _this.completedAnimation.shift();
            if (action) {
                _this.numbers[action.index].colour = _this.$finishedBars;
            }
            else {
                clearInterval(timer);
            }
        }, 20);
    };
    ArraysService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ArraysService);
    return ArraysService;
}());
exports.ArraysService = ArraysService;

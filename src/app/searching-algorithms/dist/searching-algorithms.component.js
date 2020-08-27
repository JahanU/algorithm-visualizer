"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.SearchingAlgorithmsComponent = void 0;
var core_1 = require("@angular/core");
var algorithm_enum_1 = require("../shared/algorithm-enum");
var linear_search_1 = require("./algorithms/linear-search");
var binary_search_1 = require("./algorithms/binary-search");
var SearchingAlgorithmsComponent = /** @class */ (function () {
    function SearchingAlgorithmsComponent(arrService) {
        this.arrService = arrService;
        this.algorithmEnum = algorithm_enum_1.algorithmEnums;
        this.selectedAlgorithm = algorithm_enum_1.algorithmEnums.BINARY;
        this.targetIndex = 0;
    }
    SearchingAlgorithmsComponent.prototype.ngOnInit = function () {
        this.arrService.resetArray();
        this.arrService.sortArray();
        this.targetIndex = this.getRandomElement();
        this.arrService.numbers[this.targetIndex].colour = this.arrService.$swappedIndex;
    };
    SearchingAlgorithmsComponent.prototype.resetArray = function () {
        this.arrService.resetArray();
        this.arrService.sortArray();
        this.targetIndex = this.getRandomElement();
        this.arrService.numbers[this.targetIndex].colour = this.arrService.$swappedIndex;
    };
    SearchingAlgorithmsComponent.prototype.pitchSize = function (event) {
        this.arrService.arrayLength = event.value;
        this.setBarWidth();
        this.resetArray();
    };
    SearchingAlgorithmsComponent.prototype.setBarWidth = function () {
        var arrSize = this.arrService.arrayLength;
        if (arrSize < 20)
            return this.arrService.barWidth = 32;
        if (arrSize >= 20 && arrSize < 30)
            return this.arrService.barWidth = 22;
        if (arrSize >= 30 && arrSize < 40)
            return this.arrService.barWidth = 18;
        if (arrSize >= 40 && arrSize < 50)
            return this.arrService.barWidth = 16;
        if (arrSize >= 50 && arrSize < 60)
            return this.arrService.barWidth = 12;
        if (arrSize >= 60 && arrSize < 70)
            return this.arrService.barWidth = 10;
        if (arrSize >= 70 && arrSize < 80)
            return this.arrService.barWidth = 8;
        if (arrSize >= 80 && arrSize < 90)
            return this.arrService.barWidth = 6;
        if (arrSize >= 90 && arrSize < 120)
            return this.arrService.barWidth = 5;
        if (arrSize >= 120 && arrSize < 150)
            return this.arrService.barWidth = 4;
        if (arrSize >= 150 && arrSize < 180)
            return this.arrService.barWidth = 3;
        if (arrSize >= 190)
            return this.arrService.barWidth = 2;
    };
    SearchingAlgorithmsComponent.prototype.pitchSpeed = function (event) {
        this.arrService.animationSpeed = event.value;
    };
    SearchingAlgorithmsComponent.prototype.formatLabel = function (value) {
        value /= 1000;
        if (value.toString().length > 1)
            return value.toString().substring(0, 4) + 's';
        return value + 's';
    };
    SearchingAlgorithmsComponent.prototype.displayInfo = function (pickedAlgo) {
        this.selectedAlgorithm = pickedAlgo;
    };
    SearchingAlgorithmsComponent.prototype.startSorting = function () {
        this.arrService.sorting = true;
        if (this.selectedAlgorithm === this.algorithmEnum.LINEAR) {
            this.linearSearch();
        }
        if (this.selectedAlgorithm === this.algorithmEnum.BINARY) {
            this.binarySearch();
        }
    };
    SearchingAlgorithmsComponent.prototype.getRandomElement = function () {
        var min = 20;
        var max = 200;
        return Math.floor((Math.random() * (max - min + 1)) + min) % this.arrService.numbers.length;
    };
    SearchingAlgorithmsComponent.prototype.linearSearch = function () {
        var ls = new linear_search_1.LinearSearch(this.arrService);
        var numbersCopy = __spreadArrays(this.arrService.numbers);
        ls.linearSearch(numbersCopy, numbersCopy[this.targetIndex].value);
        ls.linearSearchAnimation();
    };
    SearchingAlgorithmsComponent.prototype.binarySearch = function () {
        var bs = new binary_search_1.BinarySearch(this.arrService);
        var numbersCopy = __spreadArrays(this.arrService.numbers);
        bs.binarySearch(numbersCopy, numbersCopy[this.targetIndex].value);
        bs.binarySearchAnimation();
    };
    SearchingAlgorithmsComponent = __decorate([
        core_1.Component({
            selector: 'app-searching-algorithms',
            templateUrl: './searching-algorithms.component.html',
            styleUrls: ['./searching-algorithms.component.scss']
        })
    ], SearchingAlgorithmsComponent);
    return SearchingAlgorithmsComponent;
}());
exports.SearchingAlgorithmsComponent = SearchingAlgorithmsComponent;

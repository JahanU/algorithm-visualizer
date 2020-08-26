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
exports.AlgorithmVisualizerComponent = void 0;
var core_1 = require("@angular/core");
var merge_sort_1 = require("./algorithms/merge-sort");
var bubble_sort_1 = require("./algorithms/bubble-sort");
var quick_sort_1 = require("./algorithms/quick-sort");
var insertion_sort_1 = require("./algorithms/insertion-sort");
var dropdown_1 = require("ngx-bootstrap/dropdown");
var algorithm_enum_1 = require("../shared/algorithm-enum");
var AlgorithmVisualizerComponent = /** @class */ (function () {
    function AlgorithmVisualizerComponent(arrService) {
        this.arrService = arrService;
        this.algorithmEnum = algorithm_enum_1.algorithmEnums;
        this.selectedAlgorithm = algorithm_enum_1.algorithmEnums.MERGE;
    }
    AlgorithmVisualizerComponent.prototype.ngOnInit = function () {
        this.arrService.resetArray();
    };
    AlgorithmVisualizerComponent.prototype.resetArray = function () {
        this.arrService.resetArray();
    };
    AlgorithmVisualizerComponent.prototype.pitchSize = function (event) {
        this.arrService.arrayLength = event.value;
        this.setBarWidth();
        this.arrService.resetArray();
    };
    AlgorithmVisualizerComponent.prototype.setBarWidth = function () {
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
    AlgorithmVisualizerComponent.prototype.pitchSpeed = function (event) {
        this.arrService.animationSpeed = event.value;
    };
    AlgorithmVisualizerComponent.prototype.formatLabel = function (value) {
        value /= 1000;
        if (value.toString().length > 1)
            return value.toString().substring(0, 4) + 's';
        return value + 's';
    };
    AlgorithmVisualizerComponent.prototype.displayInfo = function (pickedAlgo) {
        this.selectedAlgorithm = pickedAlgo;
    };
    AlgorithmVisualizerComponent.prototype.startSorting = function () {
        this.arrService.sorting = true;
        if (this.selectedAlgorithm === this.algorithmEnum.BUBBLE) {
            this.bubbleSort();
        }
        if (this.selectedAlgorithm === this.algorithmEnum.INSERTION) {
            this.insertionSort();
        }
        if (this.selectedAlgorithm === this.algorithmEnum.MERGE) {
            this.mergeSort();
        }
        if (this.selectedAlgorithm === this.algorithmEnum.QUICK) {
            this.quickSort();
        }
    };
    AlgorithmVisualizerComponent.prototype.bubbleSort = function () {
        var bs = new bubble_sort_1.BubbleSort(this.arrService);
        var numbersCopy = __spreadArrays(this.arrService.numbers);
        bs.bubbleSort(numbersCopy);
        bs.bubbleSortAnimation();
    };
    AlgorithmVisualizerComponent.prototype.insertionSort = function () {
        var is = new insertion_sort_1.InsertionSort(this.arrService);
        var numbersCopy = __spreadArrays(this.arrService.numbers);
        is.insertionSort(numbersCopy);
        is.insertionSortAnimation();
    };
    AlgorithmVisualizerComponent.prototype.mergeSort = function () {
        var ms = new merge_sort_1.MergeSort(this.arrService);
        var numbersCopy = __spreadArrays(this.arrService.numbers);
        ms.mergeSort(numbersCopy, 0, numbersCopy.length - 1);
        ms.mergeSortAnimation();
    };
    AlgorithmVisualizerComponent.prototype.quickSort = function () {
        var qs = new quick_sort_1.QuickSort(this.arrService);
        var numbersCopy = __spreadArrays(this.arrService.numbers);
        qs.quickSort(numbersCopy);
        qs.quickSortAnimation();
    };
    AlgorithmVisualizerComponent = __decorate([
        core_1.Component({
            selector: 'app-algorithm-visualizer',
            templateUrl: './algorithm-visualizer.component.html',
            styleUrls: ['./algorithm-visualizer.component.scss'],
            providers: [
                {
                    provide: dropdown_1.BsDropdownConfig,
                    useValue: { isAnimated: true, autoClose: true }
                },
            ]
        })
    ], AlgorithmVisualizerComponent);
    return AlgorithmVisualizerComponent;
}());
exports.AlgorithmVisualizerComponent = AlgorithmVisualizerComponent;

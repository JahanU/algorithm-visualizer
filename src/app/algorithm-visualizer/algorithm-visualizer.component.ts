import { Component, OnInit } from '@angular/core';
import { MergeSort } from './algorithms/merge-sort';
import { BubbleSort } from './algorithms/bubble-sort';
import { QuickSort } from './algorithms/quick-sort';
import { InsertionSort } from './algorithms/insertion-sort';

import { ArraysService } from '../shared/arrays.service';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { algorithmEnums } from '../shared/algorithm-enum';
import { ArrayBars } from '../models/ArrayBars';

@Component({
  selector: 'app-algorithm-visualizer',
  templateUrl: './algorithm-visualizer.component.html',
  styleUrls: ['./algorithm-visualizer.component.scss'],
  providers: [
    {
      provide: BsDropdownConfig,
      useValue: { isAnimated: true, autoClose: true },
    },
  ],
})
export class AlgorithmVisualizerComponent implements OnInit {

  algorithmEnum = algorithmEnums;
  selectedAlgorithm: algorithmEnums = algorithmEnums.MERGE;

  constructor(public arrService: ArraysService) { }

  ngOnInit(): void {
    this.arrService.resetArray();
  }

  resetArray(): void {
    this.arrService.resetArray();
  }

  pitchSize(event: any): void {
    this.arrService.arrayLength = event.value;
    this.arrService.sortingAnimationsMax = event.value;
    this.arrService.sortingAnimationsLeft = event.value;
    this.setBarWidth();
    this.arrService.resetArray();
  }
  setBarWidth() {
    const arrSize = this.arrService.arrayLength
    if (arrSize < 20) return this.arrService.barWidth = 32;
    if (arrSize >= 20 && arrSize < 30) return this.arrService.barWidth = 22;
    if (arrSize >= 30 && arrSize < 40) return this.arrService.barWidth = 18;
    if (arrSize >= 40 && arrSize < 50) return this.arrService.barWidth = 16;
    if (arrSize >= 50 && arrSize < 60) return this.arrService.barWidth = 12;
    if (arrSize >= 60 && arrSize < 70) return this.arrService.barWidth = 10;
    if (arrSize >= 70 && arrSize < 80) return this.arrService.barWidth = 8;
    if (arrSize >= 80 && arrSize < 90) return this.arrService.barWidth = 6;
    if (arrSize >= 90 && arrSize < 120) return this.arrService.barWidth = 5;
    if (arrSize >= 120 && arrSize < 150) return this.arrService.barWidth = 4;
    if (arrSize >= 150 && arrSize < 180) return this.arrService.barWidth = 3;
    if (arrSize >= 190) return this.arrService.barWidth = 2;
  }

  pitchSpeed(event: any): void {
    this.arrService.animationSpeed = event.value;
  }

  formatLabel(value: number) {
    value /= 1000;
    if (value.toString().length > 1)
      return value.toString().substring(0, 4) + 's';
    return value + 's';
  }


  displayInfo(pickedAlgo: algorithmEnums) {
    this.selectedAlgorithm = pickedAlgo;
  }

  pauseAnimation() {
    this.arrService.isPaused = !this.arrService.isPaused;
  }

  startSorting(): void {
    this.arrService.sorting = true;
    if (this.selectedAlgorithm === this.algorithmEnum.BUBBLE) { this.bubbleSort(); }
    if (this.selectedAlgorithm === this.algorithmEnum.INSERTION) { this.insertionSort(); }
    if (this.selectedAlgorithm === this.algorithmEnum.MERGE) { this.mergeSort(); }
    if (this.selectedAlgorithm === this.algorithmEnum.QUICK) { this.quickSort(); }
  }

  bubbleSort(): void {
    const bs = new BubbleSort(this.arrService);
    const numbersCopy = [...this.arrService.numbers];
    bs.bubbleSort(numbersCopy);
    bs.bubbleSortAnimation();
  }

  insertionSort(): void {
    const is = new InsertionSort(this.arrService);
    const numbersCopy = [...this.arrService.numbers];
    is.insertionSort(numbersCopy);
    is.insertionSortAnimation();
  }

  mergeSort(): void {
    const ms: MergeSort = new MergeSort(this.arrService);
    const numbersCopy = [...this.arrService.numbers];
    ms.mergeSort(numbersCopy, 0, numbersCopy.length - 1);
    ms.mergeSortAnimation();
  }

  quickSort(): void {
    const qs: QuickSort = new QuickSort(this.arrService);
    const numbersCopy = [...this.arrService.numbers];
    qs.quickSort(numbersCopy);
    qs.quickSortAnimation();
  }

}

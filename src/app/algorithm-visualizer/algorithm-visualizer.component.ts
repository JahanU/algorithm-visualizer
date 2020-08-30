import { Component, OnInit } from '@angular/core';
import { MergeSort } from './algorithms/merge-sort';
import { BubbleSort } from './algorithms/bubble-sort';
import { QuickSort } from './algorithms/quick-sort';
import { InsertionSort } from './algorithms/insertion-sort';

import { ArraysService } from '../shared/arrays.service';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { algorithmEnums } from '../shared/algorithm-enum';
import { ArrayBars } from '../shared/models/ArrayBars';

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
    this.arrService.setBarWidth();
    this.arrService.resetArray();
  }

  pitchSpeed(event: any): void {
    this.arrService.animationSpeed = event.value;
  }

  displayInfo(pickedAlgo: algorithmEnums): void {
    this.selectedAlgorithm = pickedAlgo;
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

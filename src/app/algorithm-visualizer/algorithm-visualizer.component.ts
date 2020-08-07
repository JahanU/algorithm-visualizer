import { Component, OnInit } from '@angular/core';
import { MergeSort } from './algorithms/merge-sort';
import { BubbleSort } from './algorithms/bubble-sort';
import { QuickSort } from './algorithms/quick-sort';
import { ArraysService } from '../shared/arrays.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { algorithmEnums } from '../shared/algorithm-enum';

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
  selectedAlgorithm: string = algorithmEnums.QUICK;

  constructor(public arrService: ArraysService) {}

  ngOnInit(): void {
    this.arrService.resetArray();
  }

  resetArray() {
    this.arrService.resetArray();
  }

  setBarColors(colour: string) {
    return colour;
  }

  pitchSize(event: any) {
    this.arrService.arrayLength = event.value;
    this.arrService.resetArray();
  }

  pitchSpeed(event: any) {
    console.log(event.value);
    this.arrService.animationSpeed = event.value;
  }

  startSorting() {
    if (this.selectedAlgorithm.includes(this.algorithmEnum.BUBBLE))
      this.bubbleSort();
    else if (this.selectedAlgorithm.includes(this.algorithmEnum.MERGE))
      this.mergeSort();
    else if (this.selectedAlgorithm.includes(this.algorithmEnum.QUICK))
      this.quickSort();
  }

  bubbleSort() {
    const bs = new BubbleSort(this.arrService);
    let numbersCopy = [...this.arrService.numbers];
    bs.bubbleSort(numbersCopy);
    bs.bubbleSortAnimation();
    console.log(numbersCopy);
  }

  mergeSort() {
    const ms: MergeSort = new MergeSort(this.arrService);
    let numbersCopy = [...this.arrService.numbers];
    ms.mergeSort(numbersCopy, 0, numbersCopy.length - 1);
    ms.mergeSortAnimation();
  }

  quickSort() {
    const qs: QuickSort = new QuickSort(this.arrService);
    let numbersCopy = [...this.arrService.numbers];
    qs.quickSort(numbersCopy);
    qs.quickSortAnimation();
  }
}

import { Component, OnInit } from '@angular/core';
import { MergeSort } from './algorithms/merge-sort';
import { BubbleSort } from './algorithms/bubble-sort';
import { ArraysService } from '../shared/arrays.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-algorithm-visualizer',
  templateUrl: './algorithm-visualizer.component.html',
  styleUrls: ['./algorithm-visualizer.component.scss'],
})
export class AlgorithmVisualizerComponent implements OnInit {
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

  bubbleSort() {
    const bs = new BubbleSort(this.arrService);
    const inputCopy = [...this.arrService.numbers];
    bs.bubbleSort(inputCopy);
    bs.bubbleSortAnimation();
  }

  mergeSort() {
    const ms: MergeSort = new MergeSort(this.arrService);
    let numbersCopy = [...this.arrService.numbers];
    ms.mergeSort(numbersCopy, 0, numbersCopy.length - 1);
    // this.arrService.isArraySorted(numbersCopy);
    ms.mergeSortAnimation();
  }
}

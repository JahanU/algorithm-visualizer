import { Component, OnInit } from '@angular/core';
import { MergeSort } from './algorithms/merge-sort';
import { BubbleSort } from './algorithms/bubble-sort';
import { ArraysService } from '../shared/arrays.service';

@Component({
  selector: 'app-algorithm-visualizer',
  templateUrl: './algorithm-visualizer.component.html',
  styleUrls: ['./algorithm-visualizer.component.scss']
})
export class AlgorithmVisualizerComponent implements OnInit {

  constructor(private readonly arraysService: ArraysService) { }

  ngOnInit(): void {
    this.arraysService.resetArray();
  }

  resetArray() {
    this.arraysService.resetArray();
  }

  setBarColors() {
    if (this.arraysService.isArraySorted()) {
      return 'purple';
    }
    return 'rgb(9, 168, 168)';
  }

  bubbleSort() {
    const bs = new BubbleSort(this.arraysService);
    const inputCopy = [...this.arraysService.numbers];
    bs.bubbleSort(inputCopy);
    bs.bubbleSortAnimation();
  }


  mergeSort() {
    const ms: MergeSort = new MergeSort(this.arraysService);
    const inputCopy = [...this.arraysService.numbers];
    ms.mergeSort(inputCopy, inputCopy.length);
    console.log('sorted Merge: ', inputCopy);
    this.arraysService.numbers = [...inputCopy];
  }

}


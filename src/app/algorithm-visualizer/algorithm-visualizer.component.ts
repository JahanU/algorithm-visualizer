import { Component, OnInit } from '@angular/core';
import { MergeSort } from './algorithms/merge-sort';
import { BubbleSort } from './algorithms/bubble-sort';
import { ArraysService } from '../shared/arrays.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

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
  selectedAlgorithm: string = 'Algorithms';

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

  pitch(event: any) {
    console.log(event.value);
    this.arrService.arrayLength = event.value;
    this.arrService.resetArray();
  }

  startSorting() {
    // TODO: Use Enum later
    if (this.selectedAlgorithm.includes('Bubble')) {
      this.bubbleSort();
    } else {
      this.mergeSort();
    }
  }

  bubbleSort() {
    const bs = new BubbleSort(this.arrService);
    let inputCopy = [...this.arrService.numbers];
    bs.bubbleSort(inputCopy);
    bs.bubbleSortAnimation();
  }

  mergeSort() {
    const ms: MergeSort = new MergeSort(this.arrService);
    let numbersCopy = [...this.arrService.numbers];
    ms.mergeSort(numbersCopy, 0, numbersCopy.length - 1);
    ms.mergeSortAnimation();
  }
}

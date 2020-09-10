import { Component, OnInit } from '@angular/core';
import { ArraysService } from '../shared/arrays.service';
import { AlgorithmEnum } from '../shared/algorithm.enum';
import { BinarySearch } from './algorithms/binary-search';
import { LinearSearch } from './algorithms/linear-search';

@Component({
  selector: 'app-searching-algorithms',
  templateUrl: './searching-algorithms.component.html',
  styleUrls: ['./searching-algorithms.component.scss']
})
export class SearchingAlgorithmsComponent implements OnInit {

  algoEnum = AlgorithmEnum;
  selectedAlgorithm: AlgorithmEnum = AlgorithmEnum.BINARY;
  targetIndex = 0;

  constructor(public arrService: ArraysService) { }

  ngOnInit(): void {
    this.arrService.resetArrayNoDups();
    this.arrService.sortArray();
    this.targetIndex = this.getRandomElement();
    this.arrService.numbers[this.targetIndex].colour = this.arrService.$targetIndex;
  }

  resetArray(): void {
    this.arrService.resetArrayNoDups();
    this.arrService.sortArray();
    this.targetIndex = this.getRandomElement();
    this.arrService.numbers[this.targetIndex].colour = this.arrService.$targetIndex;
  }

  pitchSize(event: any): void {
    this.arrService.arrayLength = event.value;
    this.arrService.setBarWidth();
    this.resetArray();
  }


  pitchSpeed(event: any): void {
    this.arrService.animationSpeed = event.value;
  }

  displayInfo(pickedAlgo: AlgorithmEnum): void {
    this.selectedAlgorithm = pickedAlgo;
  }

  startSorting(): void {
    this.arrService.sorting = true;
    if (this.selectedAlgorithm === AlgorithmEnum.LINEAR) { this.linearSearch(); }
    if (this.selectedAlgorithm === AlgorithmEnum.BINARY) { this.binarySearch(); }
  }

  getRandomElement(): number {
    const min = 20;
    const max = 200;
    return Math.floor((Math.random() * (max - min + 1)) + min) % this.arrService.numbers.length;
  }

  linearSearch(): void {
    const ls = new LinearSearch(this.arrService);
    const numbersCopy = [...this.arrService.numbers];
    ls.linearSearch(numbersCopy, numbersCopy[this.targetIndex].value);
    ls.linearSearchAnimation();
  }

  binarySearch(): void {
    const bs = new BinarySearch(this.arrService);
    const numbersCopy = [...this.arrService.numbers];
    bs.binarySearch(numbersCopy, numbersCopy[this.targetIndex].value);
    bs.binarySearchAnimation();
  }
}

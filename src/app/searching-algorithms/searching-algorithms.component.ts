import { Component, OnInit } from '@angular/core';
import { ArraysService } from '../shared/arrays.service';
import { algorithmEnums } from '../shared/algorithm-enum';
import { LinearSearch } from './algorithms/linear-search';

@Component({
  selector: 'app-searching-algorithms',
  templateUrl: './searching-algorithms.component.html',
  styleUrls: ['./searching-algorithms.component.scss']
})
export class SearchingAlgorithmsComponent implements OnInit {

  algorithmEnum = algorithmEnums;
  selectedAlgorithm: algorithmEnums = algorithmEnums.LINEAR;
  targetIndex = 0;

  constructor(public arrService: ArraysService) { }

  ngOnInit(): void {
    this.arrService.resetArray();
    this.arrService.sortArray();
    this.targetIndex = this.getRandomElement();
    this.arrService.numbers[this.targetIndex].colour = this.arrService.$swappedIndex;
  }

  resetArray(): void {
    this.arrService.resetArray();
    this.arrService.sortArray();
    this.targetIndex = this.getRandomElement();
    this.arrService.numbers[this.targetIndex].colour = this.arrService.$swappedIndex;
  }

  pitchSize(event: any): void {
    this.arrService.arrayLength = event.value;
    this.setBarWidth();
    this.resetArray();
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

  formatLabel(value: number): String {
    value /= 1000;
    if (value.toString().length > 1)
      return value.toString().substring(0, 4) + 's';
    return value + 's';
  }


  displayInfo(pickedAlgo: algorithmEnums): void {
    this.selectedAlgorithm = pickedAlgo;
  }

  startSorting(): void {
    this.arrService.sorting = true;
    if (this.selectedAlgorithm === this.algorithmEnum.LINEAR) { this.linearSearch(); }

  }

  getRandomElement(): number {
    const min = 20;
    const max = 200;
    return Math.floor((Math.random() * (max - min + 1)) + min) % this.arrService.numbers.length;
  }

  linearSearch(): void {
    let ls = new LinearSearch(this.arrService);
    const numbersCopy = [...this.arrService.numbers];
    ls.linearSearch(numbersCopy, numbersCopy[this.targetIndex].value);
    ls.linearSearchAnimation();
  }

}

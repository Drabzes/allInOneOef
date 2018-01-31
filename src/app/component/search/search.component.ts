import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {selector} from 'rxjs/operator/publish';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  difficulties: number[] = [1, 2, 3, 4, 5];
  selectedDifficulty: number = null;
  filterName: string;
  testArray: number[]

  @Output() onSubmitSelectedDifficulty: EventEmitter<number> = new EventEmitter();
  @Output() onSubmitFilterName: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  difficultyChange(event) {
    const linearray = event.split(':');
    this.selectedDifficulty = parseFloat(linearray[1]);
    this.onSubmitSelectedDifficulty.emit(this.selectedDifficulty);
  }

  filterNameKeyChange(event) {
    this.filterName = event;
    this.onSubmitFilterName.emit(this.filterName);
  }
}

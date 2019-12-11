import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() sort = new EventEmitter<boolean>();
  @Output() search = new EventEmitter<string>();
  @ViewChild('inputTxt') inputTxt: ElementRef;
  subscription = null;
  term$ = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.subscription = this.term$.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(txt => {
      this.search.emit(txt);
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSort(order) {
    this.sort.emit(order);
  }

  clear() {
    this.inputTxt.nativeElement.value = '';
  }

}

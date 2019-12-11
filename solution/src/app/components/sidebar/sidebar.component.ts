import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ListComponent } from '../list/list.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input('data') items$: Observable<any>;
  @Output() close = new EventEmitter();
  @Output() refresh = new EventEmitter();
  @ViewChild(ListComponent) itemsList: ListComponent;
  @ViewChild(SearchComponent) search: SearchComponent;

  constructor() { }

  onClose() {
    this.close.emit();
  }

  onRefresh() {
    this.refresh.emit();
  }

  onSearch(term) {
    this.itemsList.filterData(term);
  }

  clearSearch() {
    this.search.clear();
  }

  onSort(order: boolean) {
    this.itemsList.sortItems(order);
  }

}

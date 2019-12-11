import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from 'src/app/models/item';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items;
  _srcItems = [];
  
  constructor() { }

  ngOnInit() {
    this._srcItems = [...this.items];
  }

  filterData(term: String) {
    this.items = this._srcItems.filter(el => el.name.includes(term));
  }

  sortItems(orderAsc: boolean) {
    if(orderAsc) {
      this.items.sort(this._compareAsc)
    } else {
      this.items.sort(this._compareDesc)
    }
  }

  _compareDesc(a: ListItem, b:ListItem) {
    return b.updated - a.updated;
  }

  _compareAsc(a: ListItem, b:ListItem) {
    return a.updated - b.updated;
  }

}

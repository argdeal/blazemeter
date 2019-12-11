import { Component, Input, OnInit } from '@angular/core';
import { ListItem } from '../../models/item';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input('data') item: ListItem;
  date: string;
  time: string;

  constructor() { }

  ngOnInit() {
    const updated = new Date(this.item.updated);
    const d = updated.toString().split(' ');
    this.date = `${d[1]} ${this.format(+d[2])}`;
    const hour = updated.getHours();
    const hh = hour - 12;
    const mm = this.format(+updated.getMinutes());
    const ampm = +hour > 11 ? 'PM' : 'AM';
    this.time = `${hh}:${mm} ${ampm}`
    
  }

  format(d: number) : string {
    return d < 10 ? `0${d}` : `${d}`;
  }

}

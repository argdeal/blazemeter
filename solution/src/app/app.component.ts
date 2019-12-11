import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable} from 'rxjs';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ListItem } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSidebar = true;
  data$: Observable<any>;
  @ViewChild(SidebarComponent) sidebar: SidebarComponent;

  constructor(private httpClient: HttpClient) 
  { }

  ngOnInit() {
    this.retrieveData();
  }

  retrieveData() {
    this.data$ = this.httpClient.get("assets/data/sidebar.json");
  }

  onShowSidebar(show) {
    this.showSidebar = show;
  }

  refreshData() {
    this.retrieveData();
    this.sidebar.clearSearch();
  }

}



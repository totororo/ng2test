import { Component, OnInit } from '@angular/core';
import { Browser } from './tables.object';
import { TablesService } from './tables.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html'
})
export class TablesComponent implements OnInit {
  tables: Browser[] = [];
  constructor(private tablesService: TablesService) { }

  ngOnInit() {
    this.tablesService.getData().subscribe(response => {
      this.tables = response;
    })
  }
}

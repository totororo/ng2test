import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent implements OnInit {
  public isCollapsed: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public collapsed(event: any): void {
    console.log(event);
  }

  public expanded(event: any): void {
    console.log(event);
  }
}

// Source
// http://valor-software.com/ng2-bootstrap/#/collapse
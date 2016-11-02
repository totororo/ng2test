import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'component-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent implements OnInit {
  @Input() singleModel: string;
  public radioModel: string = 'Middle';
  public checkModel: any = { left: false, middle: true, right: false };
  constructor() { }

  ngOnInit() {
    if (this.singleModel == "4") {
      alert(" single modle 3");
    }
  }

}

// Source
// http://valor-software.com/ng2-bootstrap/#/buttons
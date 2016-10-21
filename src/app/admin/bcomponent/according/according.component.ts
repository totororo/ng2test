import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'component-accordion',
  templateUrl: './according.component.html'
})

export class AccordingComponent implements OnInit {
  oneAtATime: boolean = true;
  items: Array<string> = ['Item 1', 'Item 2', 'Item 3'];
  status: Object = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  constructor() { }

  ngOnInit() {
  }

  groups: Array<any> = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  addItem(): void {
    this.items.push(`Items ${this.items.length + 1}`);
  }
}

// Source
// http://valor-software.com/ng2-bootstrap/#/accordion

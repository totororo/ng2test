import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-dropdowns',
  templateUrl: './dropdowns.component.html'
})
export class DropdownsComponent implements OnInit {

  public disabled: boolean = false;
  public status: { isopen: boolean } = { isopen: false };
  public items: Array<string> = ['The first choice!',
    'And another choice for you.', 'but wait! A third!'];

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  ngOnInit() {
  }

}

// Source
// http://valor-software.com/ng2-bootstrap/#/dropdowns

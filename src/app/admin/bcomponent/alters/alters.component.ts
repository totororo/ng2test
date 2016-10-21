import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-alters',
  templateUrl: './alters.component.html'
})
export class AltersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public alerts: Array<Object> = [
    {
      type: 'danger',
      msg: 'Oh snap! Change a few things up and try submitting again.'
    },
    {
      type: 'success',
      msg: 'Well done! You successfully read this important alert message.',
      closable: true
    }
  ];

  public closeAlert(i: number): void {
    this.alerts.splice(i, 1);
  }

  public addAlert(): void {
    this.alerts.push({ msg: 'Another alert!', type: 'warning', closable: true });
  }
}

// Source
// http://valor-software.com/ng2-bootstrap/#/alerts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent {

  public x: number = 5;
  public y: number = 2;
  public max: number = 10;
  public rate: number = 7;
  public isReadonly: boolean = false;

  public overStar: number;
  public percent: number;

  public ratingStates: any = [
    { stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle' },
    { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' },
    { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' },
    { stateOn: 'glyphicon-heart' },
    { stateOff: 'glyphicon-off' }
  ];

  public hoveringOver(value: number): void {
    this.overStar = value;
    this.percent = 100 * (value / this.max);
  };

  public resetStar(): void {
    this.overStar = void 0;
  }


}

// Source
// http://valor-software.com/ng2-bootstrap/#/rating
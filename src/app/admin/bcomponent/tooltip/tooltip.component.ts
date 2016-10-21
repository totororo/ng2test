import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-tooltip',
  templateUrl: './tooltip.component.html'
})
export class TooltipComponent {

  public dynamicTooltip: string = 'Hello, World!';
  public dynamicTooltipText: string = 'dynamic';
  public htmlTooltip: string = 'I\'ve been made <b>bold</b>!';
  public tooltipModel: any = { text: 'foo', index: 1 };

  public tooltipStateChanged(state: boolean): void {
    console.log(`Tooltip is open: ${state}`);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleChartsComponent } from './charts.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [SampleChartsComponent]
})
export class SampleChartsModule { }

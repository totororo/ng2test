import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { GoogleChart } from 'angular2-google-chart/directives/angular2-google-chart.directive';

import { MomentModule } from 'angular2-moment';

import { DashboardComponent } from './dashboard.component';
import { ButtonsComponent } from '../bcomponent/buttons/buttons.component';
import { SampleChartsModule } from '../charts/charts.module';
import { SampleChartsComponent } from '../charts/charts.component';


@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule, ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDtCB5DRO7XyDZXHoVHtPJ2b8130S7FMaA'
    }),
    MomentModule.forRoot('ja')],

  declarations: [DashboardComponent, ButtonsComponent, SampleChartsComponent, GoogleChart],

})

export class DashboardModule { }

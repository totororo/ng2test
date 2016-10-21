import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BcomponentComponent } from './bcomponent.component';
import {
  AccordionModule,
  AlertModule,
  ButtonsModule,
  CarouselModule,
  CollapseModule,
  DatepickerModule,
  DropdownModule,
  ModalModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule,
} from 'ng2-bootstrap/ng2-bootstrap';

import {
  AccordingComponent,
  AltersComponent,
  ButtonsComponent,
  CarouselComponent,
  CollapseComponent,
  DatepickerComponent,
  DropdownsComponent,
  ModalsComponent,
  PaginationComponent,
  ProgressbarComponent,
  RatingComponent,
  TabsComponent,
  TimepickerComponent,
  TooltipComponent,
  TypeaheadComponent
} from './index';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    CollapseModule,
    DatepickerModule,
    DropdownModule,
    ModalModule,
    PaginationModule,
    ProgressbarModule,
    RatingModule,
    TabsModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [TooltipModule],
  declarations: [
    BcomponentComponent,
    AccordingComponent,
    AltersComponent,
    ButtonsComponent,
    CarouselComponent,
    CollapseComponent,
    DatepickerComponent,
    DropdownsComponent,
    ModalsComponent,
    PaginationComponent,
    ProgressbarComponent,
    RatingComponent,
    TabsComponent,
    TimepickerComponent,
    TooltipComponent,
    TypeaheadComponent
  ]
})
export class BcomponentModule { }

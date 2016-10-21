import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import { TablesService } from './tables.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TablesComponent],
  providers: [TablesService]
})
export class TablesModule { }

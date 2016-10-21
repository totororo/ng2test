import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SampleFormComponent } from './form.component';
import { SampleFormService } from './form.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SampleFormComponent],
  providers: [SampleFormService]

})
export class SampleFormModule { }

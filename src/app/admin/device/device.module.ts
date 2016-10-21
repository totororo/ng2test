import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeviceComponent } from './device.component';
import { DeviceService } from '../../service/device.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [DeviceService],
  declarations: [DeviceComponent]
})

export class DeviceModule { }

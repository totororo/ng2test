import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { DeviceComponent } from './device.component';
import { DeviceService } from '../../service/device.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule
  ],
  providers: [DeviceService],
  declarations: [DeviceComponent]
})

export class DeviceModule { }

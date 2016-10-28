import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';

import { DeviceComponent } from './device.component';
import { DeviceService } from '../../service/device.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    ModalModule,
    CollapseModule
  ],
  providers: [DeviceService],
  declarations: [DeviceComponent]
})


export class DeviceModule { }

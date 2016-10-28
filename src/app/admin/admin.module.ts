import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { CollapseModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import { DashboardModule } from './dashboard/dashboard.module';
import { DeviceModule } from './device/device.module';
import { AdminComponent } from './admin.component';
import { ADMIN_ROUTES } from './admin.routings';
import { DeviceService } from '../service/device.service';
import { UserService } from '../service/user.service';
import { MessageService } from '../service/message.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ModalModule,
    DropdownModule,
    DashboardModule,
    DeviceModule,
    ADMIN_ROUTES,
    CollapseModule

  ],
  declarations: [AdminComponent],
  providers: [DeviceService, UserService, MessageService]
})


export class AdminModule { }

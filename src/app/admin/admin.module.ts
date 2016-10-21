import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterOutlet } from "@angular/router";

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
    DashboardModule,
    DeviceModule,
    ADMIN_ROUTES
  ],
  declarations: [AdminComponent],
  providers: [DeviceService, UserService, MessageService]
})


export class AdminModule { }

import { ModuleWithProviders } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import { LoginService } from '../service/login.service';
import { LoginComponent } from '../auth/login.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeviceComponent } from './device/device.component';

import { SampleFormComponent } from './form/form.component';
import { TablesComponent } from './tables/tables.component';
import { SampleChartsComponent } from './charts/charts.component';
import { BcomponentComponent } from './bcomponent/bcomponent.component';

const adminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [LoginService],
        children: [
            {
                path: '',
                canActivateChild: [LoginService],
                children: [
                    { path: '', component: DashboardComponent },
                    { path: 'dashboard', component: DashboardComponent },
                    { path: 'device', component: DeviceComponent },
                    { path: 'logout', component: LoginComponent, data: { login: false } },
                ]
            }
        ]
    },

];

export const ADMIN_ROUTES: ModuleWithProviders = RouterModule.forChild(adminRoutes);
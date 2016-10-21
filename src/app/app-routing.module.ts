import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login.component';



const webRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },

  { path: 'logout', component: LoginComponent, data: { 'login': false } },
  { path: 'register', component: LoginComponent, data: { 'register': true } }
];

@NgModule({
  imports: [RouterModule.forRoot(webRoutes)],
  exports: [RouterModule],
  providers: []
})

export class FirebasememoRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthProviders } from 'angularfire2';
import { AuthMethods } from 'angularfire2';

import { LoginComponent } from './login.component';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';

@NgModule({
    imports: [
        BrowserModule
    ],
    providers: [LoginService, UserService],
    declarations: [LoginComponent]
})

export class LoginModule { }
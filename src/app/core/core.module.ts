import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { PushNotificationsModule } from 'angular2-notifications'
import { AngularFireModule } from 'angularfire2';

import { AppService } from '../app.service';
import { throwIfAlreadyLoaded } from './module-import-guard';


export const firebaseConfig = {
    // TODO : change your firebase configuration.
    apiKey: 'AIzaSyAa68ob7hc9uUuTLBtX-eoa18syz_-FDj8',
    authDomain: 'fireiot-cfdf0.firebaseapp.com',
    databaseURL: 'https://fireiot-cfdf0.firebaseio.com/',
    storageBucket: 'gs://fireiot-cfdf0.appspot.com'
}

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        BrowserModule,
        PushNotificationsModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    exports: [
        CommonModule,
        FormsModule,
        BrowserModule,

    ],
    providers: [AppService]
})

export class CoreModule {
    constractor( @Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                AppService
            ]
        };
    }
}
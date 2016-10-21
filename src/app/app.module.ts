import { NgModule } from '@angular/core';

import { FirebasememoRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { LoginModule } from './auth/login.module';

import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule.forRoot(),
    LoginModule,
    FirebasememoRoutingModule,
    AdminModule
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})


export class AppModule { }

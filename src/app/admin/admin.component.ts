import { Component, OnInit } from '@angular/core';

import { BaseComponent } from '../base-component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent extends BaseComponent implements OnInit {

  constructor(public appService:AppService) {
    super(appService);
  }

  ngOnInit() {
  }

}

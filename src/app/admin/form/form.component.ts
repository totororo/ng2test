import { Component, OnInit } from '@angular/core';
import { Browser } from '../tables/tables.object';
import { SampleFormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class SampleFormComponent {
  active: boolean = true;
  model: Browser;
  submitted = false;

  constructor(private formService: SampleFormService) {
    this.model = new Browser("TestEngie", "TestBrowser", "TestPlatform", 1, "CSS2");
  }

  onSubmit() {
    console.log("onSubmit");

    this.formService.saveData(JSON.stringify(this.model)).subscribe(r => {
      console.log(r);
      if (r.result == "OK") {
        this.submitted = true;
        this.active = false;
        alert("Submit Success.");
      } else {
        alert("Submit Failed.");
      }
    });

  }

  ngOnInit() {
  }

  save() {
    console.log("save");
  }

}

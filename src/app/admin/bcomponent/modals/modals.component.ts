import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
@Component({
  selector: 'component-modals',
  templateUrl: './modals.component.html'
})
export class ModalsComponent implements OnInit {

  @ViewChild('childModal') public childModal: ModalDirective;

  public showChildModal(): void {
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }

  ngOnInit() {
  }
}

// Source
// http://valor-software.com/ng2-bootstrap/#/modals

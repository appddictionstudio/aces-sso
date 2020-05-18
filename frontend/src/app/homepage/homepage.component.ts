import { Component, OnInit } from '@angular/core';

import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '../popup/popup.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass'],
  providers: [NgbModalConfig, NgbModal]
})
export class HomepageComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    config: NgbModalConfig,
    // private http: HttpClient,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  panelOpenState = false;
  closeResult: any;

  ngOnInit() {
    this.open();
    // this.getCert();
  }

  // getCert() {
  //   return this.http.get('http://localhost/');
  // }

  open() {
    this.modalService.open(PopupComponent, { ariaLabelledBy: 'ngbd-modal-confirm' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

}

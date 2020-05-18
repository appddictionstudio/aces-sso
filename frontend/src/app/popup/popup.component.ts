import { Component, OnInit } from '@angular/core';

import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent implements OnInit {
  userAgreement = false;

  constructor(
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  accept() {
    this.modalService.dismissAll();
  }

  viewUserAgreement() {
    this.userAgreement = !this.userAgreement;
  }

}

import { Component, OnInit } from '@angular/core';

import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { HomepageComponent } from '../homepage/homepage.component';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PopupService } from '../service/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.sass']
})
export class PopupComponent implements OnInit {
  userAgreement = false;

  constructor(
    // public dialogRef: MatDialogRef<PopupComponent>,
    private modalService: NgbModal,
    private popupService: PopupService,
    private  home: HomepageComponent,
  ) { }

  ngOnInit(): void {
  }

  accept() {
    this.popupService.setActive(false);
    this.modalService.dismissAll('accept');
  }

  viewUserAgreement() {
    this.userAgreement = !this.userAgreement;
  }

}

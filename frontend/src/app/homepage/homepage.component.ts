import { Component, OnInit } from '@angular/core';

import { NgbModalConfig, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PopupComponent } from '../popup/popup.component';
import { Subscription } from 'rxjs';
import { PopupService } from '../service/popup.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass'],
  providers: [NgbModalConfig, NgbModal]
})
export class HomepageComponent implements OnInit {
  disabled = true;

  constructor(
    private modalService: NgbModal,
    config: NgbModalConfig,
    private service: PopupService,
    // private http: HttpClient,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  panelOpenState = false;
  closeResult: any;
  disabledButtons: Subscription;
  isDisabled: boolean;

  ngOnInit() {
    this.open();
    this.disabledButtons = this.service.getActiveObservable().subscribe(res => {
      this.isDisabled = res;
      console.log(this.isDisabled);
    });
    // this.getCert();
  }

  // getCert() {
  //   return this.http.get('http://localhost/');
  // }

  open() {
    this.modalService.open(PopupComponent, { ariaLabelledBy: 'ngbd-modal-confirm' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
    }, (reason) => {
      this.closeResult = `Dismissed`;
      console.log(this.closeResult);
    });
  }

  enableLinks() {
    this.disabled = false;
  }

}

import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  public disabledButtons = true;
  private disabled: BehaviorSubject<any> = new BehaviorSubject(this.disabledButtons);

  getActiveObservable() {
    return this.disabled.asObservable();
  }

  setActive(disabledButtons: boolean) {
    this.disabledButtons = disabledButtons;
    this.disabled.next(disabledButtons);
  }
}

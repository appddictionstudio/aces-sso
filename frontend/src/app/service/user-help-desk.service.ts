import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserHelpDeskService {

  constructor(private http: HttpClient) { }

  getUserHelpDeskInfo() {
    return this.http.get(environment.mainAPIUrl + 'getInfo/');
}

}

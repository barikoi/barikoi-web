import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NearbyListFocusService {

  private address = new Subject<any>();

  constructor() { }


  sendData(address: {}) {
      this.address.next(address);
  }

  clearMessages() {
      this.address.next();
  }

  getData(): Observable<any> {
    return this.address.asObservable();
  }
}

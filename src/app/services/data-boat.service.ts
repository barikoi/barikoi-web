import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBoatService {

  private addressData = new Subject<any>();

  constructor() { }


  sendData(addressData: {}) {
      this.addressData.next(addressData);
  }

  clearMessages() {
      this.addressData.next();
  }

  getData(): Observable<any> {
    return this.addressData.asObservable();
  }

  
}

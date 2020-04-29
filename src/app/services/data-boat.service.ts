import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBoatService {

  private addressData = new Subject<any>();

  private current_marker = new Subject<any>();

  constructor() { }

  set_current_marker(data){
    this.current_marker = data
  }


  get_current_marker(){
    return this.current_marker;
  }

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

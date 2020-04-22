import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import {BkoiCloudService} from './bkoi-cloud.service'

@Injectable({
  providedIn: 'root'
})
export class StateDataService {
  // private messageSource = new BehaviorSubject('default message');
  // currentMessage = this.messageSource.asObservable();

  constructor(private authService: AuthService, private cloudService: BkoiCloudService) { }

  pass_user_info(): any{
    return this.authService.get_user_status(); 
  }

  pass_user_api_info(): any{
    return this.authService.get_user_api_status();
  }
  


  // changeMessage(message: any) {
  //   this.messageSource.next(message)
  // }

}

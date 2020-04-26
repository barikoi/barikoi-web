import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KEY_GEN, UPDATE_PASSWORD, API_ANALYTCS, RESET_PASSWORD} from '../app.constants';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BkoiCloudService {
  user_info
  constructor( private http: HttpClient ) { }

  // reverse geocode service
  getReverseGeoResponse(latLng) {
    return this.http.get(`https://admin.barikoi.xyz/v1/reverse/without/auth?latitude=${latLng.lat}&longitude=${latLng.lng}`);
  }

  // nearby places service
  getNearbyPlace(placeType: string, latitude, longitude) {
    return this.http
    .get(`https://admin.barikoi.xyz/v1/public/find/nearby/by/catagory/noauth?latitude=${latitude}&longitude=${longitude}&ptype=${placeType}`);
  }

  public gen_api(email: any) {
    let data = {
      'email': email
    }
    return this.http.post(`${KEY_GEN}`, data)
  }

  public change_password(cp: String, np: String){
    let data = {
      'oldPass': cp,
      'newPass': np
    }
    return this.http.post(`${UPDATE_PASSWORD}`, data)
  }

  public get_user_api_data(){
    return this.http.get(`${API_ANALYTCS}`)
  }


  public send_email_pass_recovery(email: String){
    let data = {
      'email': email,
    }
    return this.http.post(`${RESET_PASSWORD}`, data)
  }

}


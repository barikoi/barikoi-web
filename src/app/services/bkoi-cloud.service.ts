import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BkoiCloudService {

  constructor( private http: HttpClient ) { }

  getReverseGeoResponse(latLng) {
    return this.http.get(`https://admin.barikoi.xyz/v1/reverse/without/auth?latitude=${latLng.lat}&longitude=${latLng.lng}`);
  }

  getNearbyPlace(placeType: string, latitude, longitude) {
    return this.http
    .get(`https://admin.barikoi.xyz/v1/public/find/nearby/by/catagory/noauth?latitude=${latitude}&longitude=${longitude}&ptype=${placeType}`);
  }
}


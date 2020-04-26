import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';
import { API_URL, AUTH_URI, AUTH_REG, USER_PROF, DEV_API_KEY} from './../app.constants';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(public http: HttpClient, public router: Router) {}
  
  user_info;

  get_user_api_info(): void {
    this.http.get(DEV_API_KEY).subscribe(
      data => {
       
        localStorage.setItem('apiinfo', JSON.stringify(data));
      },
      err => console.log(err)
    )
  }

  get_user_info_from_server(): void{
    this.http.get(`${USER_PROF}`).subscribe(
      results => {
        localStorage.setItem('profile', JSON.stringify(results['data']));
        this.router.navigate(['dev/analytics']);
      }
    );
  }


  get_user_status():any{
    return JSON.parse(localStorage.getItem('profile'));
  }

  get_user_api_status():any{
    return JSON.parse(localStorage.getItem('apiinfo'));
  }

  login(credentials: any): Observable<any> {
    const user = {
      email: credentials.email,
      password: credentials.password
    };
    return this.http.post(`${AUTH_URI}`, user);
  }


  signup(credentials: any): Observable<any> {
    const user = {
      name: credentials.name,
      email: credentials.email,
      phone: credentials.phone,
      password: credentials.password,
      userType: credentials.userType
    };
    return this.http.post(`${AUTH_REG}`, user);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    localStorage.removeItem('apiinfo');
    this.router.navigate(['/']);
  }
  

  setSession(token: string): void {
    localStorage.setItem('token', token);
    this.get_user_api_info()
    this.get_user_info_from_server()
  }

  getToken(): String {
    return localStorage.getItem('token');
  }

  canActivate(): boolean {
    const token = this.getToken();
    
    if (!token) {
      return false;
    }
    let expiryDate = new Date(0);
    const exp = decode(token).exp;
    expiryDate.setUTCSeconds(exp);
    return expiryDate.valueOf() > new Date().valueOf();
  }

  hasRole(role: string): boolean {
    const token: any = this.getToken();
    const roleClaim = decode(token).role;
    return roleClaim === role;
  }


}

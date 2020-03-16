import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import decode from 'jwt-decode';
import { API_URL, AUTH_URI } from './../app.constants';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(public http: HttpClient, public router: Router) {}

  login(credentials: any): Observable<any> {
    const user = {
      email: credentials.email,
      password: credentials.password
    };
    return this.http.post(`${AUTH_URI}`, user);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  setSession(token: string): void {
    localStorage.setItem('token', token);
    this.router.navigate(['home']);
  }

  getToken(): String {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }

  canActivate(): boolean {
    const token = this.getToken();
    console.log(token)
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

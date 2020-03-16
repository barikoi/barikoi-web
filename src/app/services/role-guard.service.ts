import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';
@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('token');
    console.log(token)
    // decode the token to get its payload
    try{
      const tokenPayload = decode(token);
      if (
        !this.auth.canActivate() || 
        tokenPayload.role !== expectedRole
      ) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }catch(e){
      return false
      
    }
    
  }
}
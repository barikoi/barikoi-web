import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  Event,
} from '@angular/router';

import { AuthService } from '../../services/auth.service'


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(public router: Router, private authService: AuthService) {
  }

  

  ngOnInit() {
  }

  public gologout(): void{
    this.authService.logout() 
    
  }

}

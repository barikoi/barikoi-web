import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isHome: boolean;

  constructor( private router: Router ) { }

  ngOnInit() {
    this.router.url === '/' ? this.isHome = true : this.isHome = false;
  }

}

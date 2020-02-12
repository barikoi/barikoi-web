import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, Event } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isHome: boolean ;

  constructor( private router: Router ) { }

  ngOnInit() {
    // this.router.url === '/' ? this.isHome = true : this.isHome = false;

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
          // this.router.url === '/' ? this.isHome = true : this.isHome = false;
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          this.router.url === '/' ? this.isHome = true : this.isHome = false;
      }

      if (event instanceof NavigationError) {
          // Hide loading indicator

          // Present error to user
          console.log(event.error);
      }
  });
  }

}

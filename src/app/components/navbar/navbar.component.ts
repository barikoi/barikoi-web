import { Component, OnInit } from '@angular/core';
import {
    Router,
    NavigationStart,
    NavigationEnd,
    NavigationError,
    Event,
} from '@angular/router';

import { AuthService } from '../../services/auth.service';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    isHome = true;
    isDev = false;
    isLoggedin = false

    // ddd();

    constructor(private router: Router, private auth: AuthService) {
      this.ddd();
      this.isLoggedin = auth.canActivate()
      
    }

    ngOnInit() {
    }

    private ddd() {
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
            // Show loading indicator
            // this.router.url === '/' ? this.isHome = true : this.isHome = false;
        }

        if (event instanceof NavigationEnd) {
            // checking app url for ngClass change
            console.log('navmodule')
            this.router.url === '/'
                ? (this.isHome = true)
                : (this.isHome = false);
            console.log(this.isHome)
            console.log(this.isDev)
            console.log('..................')
            // this.router.url.startsWith('/dev/')
            //     ? (this.isDev = true)
            //     : (this.isDev = false);
        }

        if (event instanceof NavigationError) {
            console.log(event.error);
        }
    });
    }
}

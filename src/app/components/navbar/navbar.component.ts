import { Component, OnInit } from '@angular/core';
import {
    Router,
    NavigationStart,
    NavigationEnd,
    NavigationError,
    Event,
} from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    isHome = true;

    // ddd();

    constructor(private router: Router) {
      this.ddd();
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
            this.router.url === '/'
                ? (this.isHome = true)
                : (this.isHome = false);
        }

        if (event instanceof NavigationError) {
            // Hide loading indicator

            // Present error to user
            console.log(event.error);
        }
    });
    }
}

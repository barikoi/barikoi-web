import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, Event } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  isSearch: boolean;

  constructor( private router: Router) {}

    ngOnInit(): void {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                // Show loading indicator
                // this.router.url === '/' ? this.isHome = true : this.isHome = false;
            }

            if (event instanceof NavigationEnd) {
                // Hide loading indicator

                console.log(this.router);

                this.router.url === '/search'
                    ? (this.isSearch = true)
                    : (this.isSearch = false);
            }

            if (event instanceof NavigationError) {
                // Hide loading indicator

                // Present error to user
                console.log(event.error);
            }
        });
    }
}

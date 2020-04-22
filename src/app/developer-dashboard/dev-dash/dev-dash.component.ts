import { Component, OnInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  Event,
} from '@angular/router';

import { StateDataService } from '../../services/state-data.service';


@Component({
  selector: 'app-dev-dash',
  templateUrl: './dev-dash.component.html',
  styleUrls: ['./dev-dash.component.scss']
})
export class DevDashComponent implements OnInit {
  isSearch 
  public user_info
  constructor(private router: Router, private stateDataService: StateDataService) {
  }


  ngOnInit() {
    console.log('This is where deshboard bootsraping begains')
    console.log(this.stateDataService.pass_user_info())
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
          // Show loading indicator
          // this.router.url === '/' ? this.isHome = true : this.isHome = false;
      }

      if (event instanceof NavigationEnd) {
          // Hide loading indicator
          this.router.url.startsWith('/dev/analytics') 
              ? console.log('jump into anaytics')
              : console.log('jump into account')
      }

      if (event instanceof NavigationError) {
          // Present error to user
          console.error(event.error);
      }
  });
  }

  

}

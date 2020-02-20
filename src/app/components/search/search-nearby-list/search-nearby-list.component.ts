import { Component, OnInit } from '@angular/core';
import { DataBoatService } from 'src/app/services/data-boat.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-search-nearby-list',
  templateUrl: './search-nearby-list.component.html',
  styleUrls: ['./search-nearby-list.component.scss']
})
export class SearchNearbyListComponent implements OnInit {
  subscription: Subscription;
  nearbyPlaces = [];

  constructor(private dataBoatService: DataBoatService) {
    this.subscription = this.dataBoatService.getData().subscribe(e => {
            if (e) {
                this.nearbyPlaces = e;
            }
        });
  }

  ngOnInit() {
  }

}

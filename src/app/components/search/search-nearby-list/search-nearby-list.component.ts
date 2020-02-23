import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataBoatService } from 'src/app/services/data-boat.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-search-nearby-list',
  templateUrl: './search-nearby-list.component.html',
  styleUrls: ['./search-nearby-list.component.scss']
})
export class SearchNearbyListComponent implements OnInit {

  @Output() nearbyListClickEvent: EventEmitter<any> = new EventEmitter();


  subscription: Subscription;
  nearbyPlaces = [];

  emitNearbyListClick(address: any) {
    console.log('whatt');
    
    this.nearbyListClickEvent.emit(address);
  }

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

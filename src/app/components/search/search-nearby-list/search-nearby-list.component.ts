import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataBoatService } from 'src/app/services/data-boat.service';
import { Subscription } from 'rxjs';
import { NearbyListFocusService } from 'src/app/services/nearby-list-focus.service';

@Component({
    selector: 'app-search-nearby-list',
    templateUrl: './search-nearby-list.component.html',
    styleUrls: ['./search-nearby-list.component.scss'],
})
export class SearchNearbyListComponent implements OnInit {
    @Output() nearbyListClickEvent: EventEmitter<any> = new EventEmitter();

    subscription: Subscription;
    nearbyPlaces = [];

        //  Nearby Place List click event
        emitNearbyListClick(address: any) {
          console.log(`from list ${address}` );
          this.nearbyListFocusService.sendData(address);

          // this.nearbyListClickEvent.emit(address);
      }

    constructor(private dataBoatService: DataBoatService, private nearbyListFocusService: NearbyListFocusService) {
        this.subscription = this.dataBoatService.getData().subscribe(e => {
            if (e) {
                this.nearbyPlaces = e;
            }
        });
    }

    ngOnInit() {}
}

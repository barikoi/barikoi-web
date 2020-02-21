import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    Input,
    NgZone,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataBoatService } from 'src/app/services/data-boat.service';
import { Address } from '../../Address';
import { Subscription } from 'rxjs';
import { LeafletMouseEvent } from 'leaflet';
import { DataVesselService } from 'src/app/services/data-vessel.service';
import { BkoiCloudService } from 'src/app/services/bkoi-cloud.service';
import { AddressRevGeo } from '../../Address-rev-geo';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    message: LeafletMouseEvent;
    keyword = 'new_address';
    opened = true;

    subscription: Subscription;

    selectedAddress: Address;
    placeName: string;
    placeAddress: string;

    data: any;
    errorMsg: string;
    isLoadingResult: boolean;
    nearbyList = false;
    addressVisibility = false;

    constructor(
        private http: HttpClient,
        private dataVesselService: DataVesselService,
        private bkoiCloudService: BkoiCloudService,
        private dataBoatService: DataBoatService,
        private zone: NgZone
    ) {
        // this.subscription = this.dataBoatService.getData().subscribe(e => {
        //     if (e) {
        //         this.reverseGeoMapEvent(e);
        //     }
        // });
    }

    ngOnInit() {}

    // reverse Geo Map Event
    reverseGeoMapEvent(data: any) {
        this.nearbyList = false;

        this.addressVisibility = true;

        this.zone.run(() => {
            this.selectedAddress = data;
            const addressArray = data.Address.split(',');
            this.placeName = addressArray.shift();
            this.placeAddress = addressArray.toString();
        });
    }

    // nearbyPlaceSelectEvent
    nearbyPlaceSelectEvent(data: any) {
        this.nearbyList = true;
        this.bkoiCloudService.getNearbyPlace(data, this.selectedAddress.latitude, this.selectedAddress.longitude).subscribe(
            (nearbyPlaces) => {
                console.log(nearbyPlaces);
                this.dataBoatService.sendData(nearbyPlaces);
                this.dataVesselService.sendData(nearbyPlaces);
            }
        );
    }


    // Getting address id for geocoding
    showDetails(place: any) {
        this.dataVesselService.sendData(place);
        this.selectedAddress = place;
        const addressArray = place.new_address.split(',');

        place.place_name
            ? (this.placeName = place.place_name)
            : (this.placeName = addressArray.shift());

        addressArray.shift();
        this.placeAddress = addressArray.toString();

        this.addressVisibility = true;
    }

    // Search autocomplete
    getServerResponse(event) {
        this.isLoadingResult = true;

        this.http
            .post('https://admin.barikoi.xyz/v1/search/autocomplete/web', {
                search: event,
            })
            .subscribe((data: { sources: {}; places: [] }) => {
                if (data.places === undefined) {
                    this.data = [];
                    this.errorMsg = data['Error'];
                } else {
                    this.data = data.places;
                }

                this.isLoadingResult = false;
                // this.nearbyList = false;

            });
    }

    searchCleared() {
        console.log('searchCleared');
        this.data = [];
    }

    selectEvent(item) {
        // do something with selected item
    }

    onChangeSearch(val: string) {
        // fetch remote data from here
        // And reassign the 'data' which is binded to 'data' property.
    }

    onFocused(e) {
        // do something when input is focused
    }
}

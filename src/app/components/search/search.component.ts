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
import { AutocompleteAddress } from '../../autocomplete-address';
// import { nearbyListClickEvent } from './search-nearby-list/search-nearby-list.component';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    public nearbyPlacesListClickEvent: Event;
    // @Output() nearbyListSelect: EventEmitter<any> = new EventEmitter();
    @Output() userClickOnNearbyList: EventEmitter<any> = new EventEmitter();

    message: LeafletMouseEvent;
    keyword = 'place_name';
    opened = true;

    subscription: Subscription;

    selectedAddress: Address;
    placeName: string;
    placeAddress: string;

    searchResult: [];
    errorMsg: string;
    isLoadingResult: boolean;
    nearbyList = false;
    addressVisibility = false;

    nearbyListEvent(event: Event) {
        this.nearbyPlacesListClickEvent = event;
    }

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

    // nearby place LIST select event
    // nearbyPlaceListSelectEvent(event: any) {
    //     // this.nearbyListSelect.emit(event);
    //     console.log('from parent' + event);
    // }

    // //  Nearby Place List click event
    // emitNearbyListClick(event: any) {
    //   this.userClickOnNearbyList.emit(event);
    // }

    // nearby Type SelectEvent
    nearbyTypeSelectEvent(data: any) {
        this.nearbyList = true;
        this.bkoiCloudService
            .getNearbyPlace(
                data,
                this.selectedAddress.latitude,
                this.selectedAddress.longitude
            )
            .subscribe(nearbyPlaces => {
                this.dataBoatService.sendData(nearbyPlaces);

                this.dataVesselService.sendData(nearbyPlaces);
            });
    }

    // Getting address id for geocoding
    showDetails(place: any) {
        this.dataVesselService.sendData(place);
        this.selectedAddress = place;
        const addressArray = place.new_address.split(',');

        // place.place_name
        //     ? (this.placeName = place.place_name)
        //     : (this.placeName = addressArray.shift());
        this.placeName = '';
        this.placeName = place.place_name;

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
                    this.searchResult = [];
                    this.errorMsg = data['Error'];
                } else {

                    data.places.forEach((addr: AutocompleteAddress) => {
                        const ab = addr.new_address.split(',');
                        ab.shift();
                        addr.cropped_address = ab.toString();
                    });

                    this.searchResult = data.places;
                }

                this.isLoadingResult = false;
                // this.nearbyList = false;
            });
    }

    searchCleared() {
        console.log('searchCleared');
        this.searchResult = [];
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

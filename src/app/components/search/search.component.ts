import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataBoatService } from 'src/app/services/data-boat.service';
import { Address } from '../../Address';
import { Subscription } from 'rxjs';
import { LeafletMouseEvent } from 'leaflet';
import { DataVesselService } from 'src/app/services/data-vessel.service';

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
    addressVisibility = false;

    constructor(
        private http: HttpClient,
        private dataVesselService: DataVesselService
    ) {
        // this.subscription = this.dataVesselService
        //     .getData()
        //     .subscribe(e => {
        //         console.log(e + 'hello');
        //         if (e) {
        //             this.updateSelectedAddress(e);
        //         }
        //     });
    }

    ngOnInit() {}

    receiveMessage($event) {
        this.message = $event;
        // this.updateSelectedAddress(this.message);

        this.http
        .get(
            `https://admin.barikoi.xyz/v1/reverse/without/auth?latitude=${this.message.latlng.lat}&longitude=${this.message.latlng.lng}`
        )
        .subscribe((place: any) => {
            // this.addMarker(data[0]);
            this.selectedAddress = place[0];
            const addressArray = this.selectedAddress.Address.split(',');

            this.placeName = addressArray.shift();

            addressArray.shift();
            this.placeAddress = addressArray.toString();

            this.addressVisibility = true;
        });
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

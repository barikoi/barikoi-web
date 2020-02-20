import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataVesselService } from 'src/app/services/data-vessel.service';
import { Subscription } from 'rxjs';
import { DataBoatService } from 'src/app/services/data-boat.service';
import { BkoiCloudService } from 'src/app/services/bkoi-cloud.service';
import {
    icon,
    latLng,
    Layer,
    marker,
    tileLayer,
    Map,
    LeafletMouseEvent,
} from 'leaflet';

const DEFAULT_MAKRER = 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png';
const GREEN_MAKRER = 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png';
const MARKER_SHADOW = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png';

@Component({
    selector: 'app-search-map',
    templateUrl: './search-map.component.html',
    styleUrls: ['./search-map.component.scss'],
})
export class SearchMapComponent implements OnInit {

    @Output() mapClickEvent: EventEmitter<any> = new EventEmitter();

    options = {
        layers: tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '...',
        }),
        zoom: 18,
        zoomControl: false,
        center: latLng(23.777176, 90.399452),
    };
    subscription: Subscription;
    markers: Layer[] = [];

    constructor(
        private dataVesselService: DataVesselService,
        private dataBoatService: DataBoatService,
        // private http: HttpClient,
        private bkoiCloudService: BkoiCloudService
    ) {
        this.markers = [];

        this.subscription = this.dataVesselService
            .getData()
            .subscribe(place => {
                if (place.length > 1) {
                    this.addMarkerMultiple(place);
                    return;
                }
                this.addMarker(place);

            });
    }

    ngOnInit() {}

    onMapReady(map: Map) {
        map.doubleClickZoom.disable();
        map.on('click', (e: LeafletMouseEvent) => {

            this.mapClickEvent.emit(e);


            // let ponti: any;
            // this.bkoiCloudService.getReverseGeoResponse(e.latlng).subscribe(
            //     (data) => {
            //         // console.log('complete');
            //         ponti = data[0];

            //         console.log(ponti);
            //         // this.dataBoatService.sendData(ponti);
            //     }
            // );

            if (this.markers.length > 0) {
                this.markers = [];
            }
            // console.log(e);

            const newMarker2 = marker([e.latlng.lat, e.latlng.lng], {
                icon: icon({
                    iconSize: [25, 41],
                    iconAnchor: [13, 41],
                    iconUrl:
                        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
                    shadowUrl:
                        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                }),
            });

            this.markers.push(newMarker2);

            // this.reverseGeo(e);
            // this.dataBoatService.sendData(e);


        });
    }

    sendMessage(e: LeafletMouseEvent) {
        this.mapClickEvent.emit(e);
      }

    private addMarker(place) {
        console.log(place);
        if (this.markers.length > 0) {
            this.markers = [];
        }
        // const addrLatLng = [ parseFloat(place.latitude), parseFloat(place.longitude)];

        const newMarker = marker(
            [parseFloat(place.latitude), parseFloat(place.longitude)],
            {
                icon: icon({
                    iconSize: [25, 41],
                    iconAnchor: [13, 41],
                    iconUrl: DEFAULT_MAKRER,
                    shadowUrl: MARKER_SHADOW
                }),
            }
        );

        this.markers.push(newMarker);

        this.options.center = latLng(
            parseFloat(place.latitude),
            parseFloat(place.longitude)
        );
    }

    private addMarkerMultiple(places) {
        // this.markers = [];

        if( this.markers.length > 1) {
            this.markers = [];
        }

        // this.markers = this.addressToMarkerNearby(places);

        for( let place of places) {
            let df = marker(
                [parseFloat(place.latitude), parseFloat(place.longitude)],
                {
                    icon: icon({
                        iconSize: [25, 41],
                        iconAnchor: [13, 41],
                        iconUrl: GREEN_MAKRER,
                        shadowUrl: MARKER_SHADOW
                    }),
                }
            );

            this.markers.push(df);
        }

        // this.markers.push()
    }


}

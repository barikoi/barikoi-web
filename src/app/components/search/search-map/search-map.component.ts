import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
    icon,
    latLng,
    Layer,
    marker,
    tileLayer,
    Map,
    LeafletMouseEvent,
} from 'leaflet';
import { DataVesselService } from 'src/app/services/data-vessel.service';
import { Subscription } from 'rxjs';
import { DataBoatService } from 'src/app/services/data-boat.service';

@Component({
    selector: 'app-search-map',
    templateUrl: './search-map.component.html',
    styleUrls: ['./search-map.component.scss'],
})
export class SearchMapComponent implements OnInit {

    @Output() mapClickEvent = new EventEmitter<LeafletMouseEvent>();

    options = {
        layers: tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '...',
        }),
        zoom: 10,
        zoomControl: false,
        center: latLng(23.777176, 90.399452),
    };
    subscription: Subscription;
    markers: Layer[] = [];

    constructor(
        private dataVesselService: DataVesselService,
        private dataBoatService: DataBoatService,
        private http: HttpClient
    ) {
        this.markers = [];

        this.subscription = this.dataVesselService
            .getData()
            .subscribe(place => {
                if (place) {
                    this.addMarker(place);
                }
            });
    }

    ngOnInit() {}

    onMapReady(map: Map) {
        map.doubleClickZoom.disable();
        map.on('click', (e: LeafletMouseEvent) => {

            this.sendMessage(e);

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
                    iconUrl:
                        'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
                    shadowUrl:
                        'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                }),
            }
        );

        this.markers.push(newMarker);
        this.options.center = latLng(
            parseFloat(place.latitude),
            parseFloat(place.longitude)
        );
    }
}

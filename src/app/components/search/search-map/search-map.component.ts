import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    NgZone,
    Input,
} from '@angular/core';
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
    Marker,
} from 'leaflet';
import { NearbyListFocusService } from 'src/app/services/nearby-list-focus.service';
import { JsonPipe } from '@angular/common';

const DEFAULT_MAKRER =
    'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png';
const GREEN_MAKRER =
    'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png';
const MARKER_SHADOW =
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png';

@Component({
    selector: 'app-search-map',
    templateUrl: './search-map.component.html',
    styleUrls: ['./search-map.component.scss'],
})
export class SearchMapComponent implements OnInit {
    @Output() mapClickEvent: EventEmitter<any> = new EventEmitter();
    @Input() userClickOnNearbyList: any;

    options = {
        layers: tileLayer('https://map.barikoi.com/styles/osm-bright/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '...',
        }),
        zoom: 18,
        zoomControl: false,
        center: latLng(23.777176, 90.399452),
    };
    // center = latLng(latLng(23.777176, 90.399452))
    subscription: Subscription;
    nearbyListSubscription: Subscription;
    markers: Marker[] = [];
    map: Map;

    constructor(
        private dataVesselService: DataVesselService,
        private bkoiCloudService: BkoiCloudService,
        private nearbyListFocusService: NearbyListFocusService
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

        this.nearbyListSubscription = this.nearbyListFocusService
            .getData()
            .subscribe(place => {
                this.focusSelectedMarker(place);
            });
    }

    ngOnInit() {}

    onMapReady(map: Map) {
        this.map = map;
        map.doubleClickZoom.disable();
        map.on('click', (e: LeafletMouseEvent) => {
            const newMarker2 = marker([e.latlng.lat, e.latlng.lng], {
                icon: icon({
                    iconSize: [25, 41],
                    iconAnchor: [13, 41],
                    iconUrl: DEFAULT_MAKRER,
                    shadowUrl: MARKER_SHADOW,
                    popupAnchor: [0, -30],
                }),
            });

            let revGeoAddress: any;
            this.bkoiCloudService.getReverseGeoResponse(e.latlng).subscribe(
                result => {
                    revGeoAddress = result[0];
                    this.mapClickEvent.emit(revGeoAddress);
                    newMarker2.bindPopup(revGeoAddress.Address);
                },
                err => {
                    console.error(`something went wrong, ${err}`);
                },
                () => {}
            );

            if (this.markers.length > 0) {
                this.markers = [];
            }
            // console.log(e);

            this.markers.push(newMarker2);

            // this.reverseGeo(e);
            // this.dataBoatService.sendData(e);
        });
    }

    sendMessage(e: LeafletMouseEvent) {
        this.mapClickEvent.emit(e);
    }

    // focusSelectedPlace(e: any) {
    //     console.log(e + 'ye');
    // }

    private addMarker(place) {
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
                    shadowUrl: MARKER_SHADOW,
                    popupAnchor: [0, -30],
                }),
            }
        ).bindPopup(place.Address);

        // this.zone.run( () => {
        //     this.options.zoom = 5;
        //     this.options.center = latLng(
        //         parseFloat(place.latitude),
        //         parseFloat(place.longitude)
        //     );
        // });

        this.markers.push(newMarker);

        this.map.setView(
            [parseFloat(place.latitude), parseFloat(place.longitude)],
            this.map.getZoom()
        );
    }

    private addMarkerMultiple(places) {
        // this.markers = [];

        if (this.markers.length > 1) {
            this.markers = [];
        }

        // this.markers = this.addressToMarkerNearby(places);

        for (let place of places) {
            let df = marker(
                [parseFloat(place.latitude), parseFloat(place.longitude)],
                {
                    icon: icon({
                        iconSize: [25, 41],
                        iconAnchor: [13, 41],
                        popupAnchor: [0, -30],
                        iconUrl: GREEN_MAKRER,
                        shadowUrl: MARKER_SHADOW,
                    }),
                }
            ).bindPopup(place.Address);

            df.openPopup()

            this.markers.push(df);
        }

        // this.markers.push()
    }

    private focusSelectedMarker(place) {


        this.markers.forEach((element: any) => {

            if(element._latlng.lat === parseFloat(place.latitude) && element._latlng.lng === parseFloat(place.longitude)) {
                this.map.setView(
                    [parseFloat(place.latitude), parseFloat(place.longitude)],
                    this.map.getZoom()
                );
                element.openPopup();

            }
        });

    }
}

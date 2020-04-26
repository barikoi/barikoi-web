import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from "../../../../environments/environment";


import { DataVesselService } from 'src/app/services/data-vessel.service';
import { Subscription } from 'rxjs';

import { BkoiCloudService } from 'src/app/services/bkoi-cloud.service';

import { NearbyListFocusService } from 'src/app/services/nearby-list-focus.service';


// Default marker icons
const DEFAULT_MAKRER =
    'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png';
const GREEN_MAKRER =
    'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png';
const MARKER_SHADOW =
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png';


@Component({
  selector: 'app-mapbox-search',
  templateUrl: './mapbox-search.component.html',
  styleUrls: ['./mapbox-search.component.scss']
})
export class MapboxSearchComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 23.899977;
  lng = 90.172652;
  zoom = 9

  @Output() mapClickEvent: EventEmitter<any> = new EventEmitter();
  markers: [];
  // for getting nearby list
  subscription: Subscription;

  // for nearby places list click detect
  nearbyListSubscription: Subscription;

  constructor(
    private dataVesselService: DataVesselService,
    private bkoiCloudService: BkoiCloudService,
    private nearbyListFocusService: NearbyListFocusService,
    
  ) { 
    mapboxgl.accessToken = environment.mapbox.accessToken;
    this.markers = [];

    //receiving nearby places list from SearchComponent
    this.subscription = this.dataVesselService
    .getData()
    .subscribe(place => {
        if (place.length > 1) {
            this.addMarkerMultiple(place);
            return;
        }
        this.addMarker(place);
    });


    // updating marker focus on nearby list click | coming from
    this.nearbyListSubscription = this.nearbyListFocusService
        .getData()
        .subscribe(place => {
            this.focusSelectedMarker(place);
        });


  }

  ngOnInit() {

    this.buildMap()
 
  }


  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    })
   this.map.addControl(new mapboxgl.NavigationControl());
  // new mapboxgl.Marker().setLngLat({lat:23.24324, lng: 90.32434}).addTo(this.map);
  }

  // adding multiple marker
  private addMarkerMultiple(places) {
    // this.markers = [];

    if (this.markers.length > 1) {
        this.markers = [];
    }

    // this.markers = this.addressToMarkerNearby(places);
    console.log('add marker multiple.....')
    for (let place of places) {
      console.log(place)
      var el = document.createElement('div');
      el.className = 'marker';

       
      el.addEventListener('click', function() {
      window.alert(place.Address);
      });
       
      // add marker to map
      new mapboxgl.Marker(el)
      .setLngLat({lat: parseFloat(place.latitude), lng: parseFloat(place.longitude)})
      .addTo(this.map);


        // let df = marker(
        //     [parseFloat(place.latitude), parseFloat(place.longitude)],
        //     {
        //         icon: icon({
        //             iconSize: [25, 41],
        //             iconAnchor: [13, 41],
        //             popupAnchor: [0, -30],
        //             iconUrl: GREEN_MAKRER,
        //             shadowUrl: MARKER_SHADOW,
        //         }),
        //     }
        // ).bindPopup(place.Address);

        // df.openPopup()

        // this.markers.push(df);
    }

    // this.markers.push()
  }



  // focus on nearby place select
  // private focusSelectedMarker(place) {


  //   this.markers.forEach((element: any) => {

  //       if(element._latlng.lat === parseFloat(place.latitude) && element._latlng.lng === parseFloat(place.longitude)) {
  //           this.map.setView(
  //               [parseFloat(place.latitude), parseFloat(place.longitude)],
  //               this.map.getZoom()
  //           );
  //           element.openPopup();

  //       }
  //   });

  // }



  // adding single marker
  private addMarker(place) {
    if (this.markers.length > 0) {
        this.markers = [];
    }

    console.log('addmarker')
    console.log(place)
    var el = document.createElement('div') ;
      el.className = 'marker';

       
      el.addEventListener('click', function() {
      window.alert(place.Address);
      });
       
      // add marker to map
      new mapboxgl.Marker(el)
      .setLngLat({lat: parseFloat(place.latitude), lng: parseFloat(place.longitude)})
      .addTo(this.map);
      console.log('done')
    // const addrLatLng = [ parseFloat(place.latitude), parseFloat(place.longitude)];

    // const newMarker = marker(
    //     [parseFloat(place.latitude), parseFloat(place.longitude)],
    //     {
    //         icon: icon({
    //             iconSize: [25, 41],
    //             iconAnchor: [13, 41],
    //             iconUrl: DEFAULT_MAKRER,
    //             shadowUrl: MARKER_SHADOW,
    //             popupAnchor: [0, -30],
    //         }),
    //     }
    // ).bindPopup(place.Address);

    // this.zone.run( () => {
    //     this.options.zoom = 5;
    //     this.options.center = latLng(
    //         parseFloat(place.latitude),
    //         parseFloat(place.longitude)
    //     );
    // });

    // this.markers.push(newMarker);

    // this.map.setView(
    //     [parseFloat(place.latitude), parseFloat(place.longitude)],
    //     this.map.getZoom()
    // );
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

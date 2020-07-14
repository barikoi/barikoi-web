import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as mblf from 'mapbox-gl-leaflet';

import { environment } from "../../environments/environment";
@Injectable({
providedIn: 'root'
})
export class MapService {
app_mapboxgl: mapboxgl;
mblfgl: mblf;
map: mapboxgl.Map;
style = 'mapbox://styles/mapbox/streets-v11';
lat = 23.899977;
lng = 90.172652;
zoom = 9
constructor() {
  mapboxgl.accessToken = environment.mapbox.accessToken;
}
buildMap() {
  console.log(';;;;;;')
  this.map = new mapboxgl.Map({
    container: 'map',
    style: this.style,
    zoom: this.zoom,
    center: [this.lng, this.lat]
  })
 this.map.addControl(new mapboxgl.NavigationControl());
new mapboxgl.Marker().setLngLat({lat:23.24324, lng: 90.32434}).addTo(this.map);
}

}
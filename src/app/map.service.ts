import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class MapService {
  map:mapboxgl.Map;

  style = 'mapbox://styles/salongo/ck0gcpb3u0woy1cnofengfo1p';
  zoom = 12
  marker = new mapboxgl.Marker({
    draggable: true
  });

  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken;
  }

  buildMap(lat, lng) {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [lng, lat]
    })
    this.map.addControl(new mapboxgl.NavigationControl());
    this.marker.setLngLat([lng, lat])
    this.marker.addTo(this.map);
  }
}

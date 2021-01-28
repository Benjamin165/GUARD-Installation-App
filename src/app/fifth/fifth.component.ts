import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../device';
import { CurrentdeviceService } from '../currentdevice.service';
import { MapService } from '../map.service';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})
export class FifthComponent implements OnInit {
  constructor(
    public CurDevService: CurrentdeviceService,
    public map: MapService
    ) { }

  ngOnInit(): void {
  }

  latitude: number;
  longitude: number;
  marker = new mapboxgl.Marker({
    draggable: false
  })
    .setLngLat([0,0]);

  get lat(): number {
    return this.latitude;
  }

  get lng(): number {
    return this.longitude;
  }

  @Input()
  set lat(value){
    this.latitude = value;    
  }
  set lng(value){
    this.longitude = value;    
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
        document.getElementById('map').style.display = 'inline-block';
        this.buildMap(position.coords.latitude, position.coords.longitude)
        //this.marker.on('dragend', this.onDragEnd)
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    this.lat = position.coords.latitude;
    this.lng = position.coords.longitude;     
  }

  submitData(){
    this.CurDevService.currentDevice.lat = this.lat;
    this.CurDevService.currentDevice.lng = this.lng;
  }

  inputEmpty(){
    return (this.lat === undefined || this.lng === undefined);
  }

  buildMap(lat, lng) {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.map.style,
      zoom: this.map.zoom,
      center: [lng, lat]
    })
    this.marker.setLngLat([lng, lat])
    this.marker.addTo(this.map);
  }

  onDragEnd() {
    //TODO: Bugfix getLngLat()
    console.log(this.marker.getLngLat());
    var lngLat = this.marker.getLngLat();
    this.lat = lngLat.lat;
    document.getElementById('lat').innerHTML = lngLat.lat;
    this.lng = lngLat.lng;
    document.getElementById('lng').innerHTML = lngLat.lng;
    this.buildMap(lngLat.lat, lngLat.lng);
  }

}

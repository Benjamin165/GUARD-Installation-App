import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { CurrentdeviceService } from '../currentdevice.service';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})
export class FifthComponent implements OnInit {
  constructor(
    public CurDevService: CurrentdeviceService,
    ) { }

  ngOnInit(): void {
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    document.getElementById("lat").nodeValue = "Latitude: " + position.coords.latitude;
    document.getElementById("lng").nodeValue = "<br>Longitude: " + position.coords.longitude;    
    this.CurDevService.currentDevice.lat = position.latitude;
    this.CurDevService.currentDevice.lng = position.longitude;
  }

}

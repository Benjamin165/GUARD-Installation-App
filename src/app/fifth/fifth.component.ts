import { Component, OnInit } from '@angular/core';
import { Device } from '../device';
import { CurrentdeviceService } from '../currentdevice.service';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})
export class FifthComponent implements OnInit {
  
  x = document.getElementById("demo");  
  constructor(
    private CurDevService: CurrentdeviceService,
    ) { }

  ngOnInit(): void {
    this.getLocation();
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
    this.x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;    
    this.CurDevService.currentDevice.lat = position.latitude;
    this.CurDevService.currentDevice.lng = position.longitude;
  }

}

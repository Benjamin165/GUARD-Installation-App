import { Component, OnInit, Input } from '@angular/core';
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

  latitude: number;
  longitude: number;

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

}

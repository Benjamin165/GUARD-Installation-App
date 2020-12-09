import { Injectable } from '@angular/core';
import { Device } from './device';

@Injectable({
  providedIn: 'root'
})
export class CurrentdeviceService {

  currentDevice: Device;

  createNew(id){
    this.currentDevice = new Device;
    this.currentDevice.id = id;
  }
  constructor() { }
}

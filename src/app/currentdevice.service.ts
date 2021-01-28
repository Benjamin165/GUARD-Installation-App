import { Injectable } from '@angular/core';
import { Device } from './device';

@Injectable({
  providedIn: 'root'
})
export class CurrentdeviceService {

  currentDevice: Device;

  createNew(id){
    // TODO: after API has been implemented: first check if ID is already in system
    this.currentDevice = new Device;
    this.currentDevice.id = id;
  }
  constructor() { }
}

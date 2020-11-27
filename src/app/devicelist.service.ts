import { Injectable } from '@angular/core';
import { Device } from './device';

@Injectable({
  providedIn: 'root'
})
export class DevicelistService {
  devices: Device[] = [];

  fetchDevies(){
    //todo: get a list from already installed guards from an API
  }

  add(device: Device){
    this.devices.push(device);
  }

  get(){
    return this.devices;
  }

  peek(){
    return this.devices[this.devices.length-1];
  }

  constructor() { }
}

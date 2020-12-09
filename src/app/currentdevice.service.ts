import { Injectable } from '@angular/core';
import { Device } from './device';

@Injectable({
  providedIn: 'root'
})
export class CurrentdeviceService {

  currentDevice: Device;

  constructor() { }
}

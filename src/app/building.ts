import { Device } from './device';

export class Building{
    id: string;
    application: string;
    system: string;
    dateinst: Date;
    lat: number;
    lng: number;
    devices: Device[];

    addDevice(device: Device) {
        this.devices.push(device);
    }

    get(){
        return this.devices;
      }
    
    peek(){
        return this.devices[this.devices.length-1];
      }
    

}
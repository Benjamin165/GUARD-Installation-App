import { Device } from './device';

export class DevicesToAdd {

    items: Device[] = [];

    constructor(){
    }

    addDevice(device: Device){
        if (this.items.includes(device)) {
            console.log("Device is already registered")
        } else {
            this.items.push(device);
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
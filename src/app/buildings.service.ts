import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Building } from './building';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {
  items: Building[] = [];


    addBuilding(building: Building){
        if (this.items.includes(building)) {
            console.log("Building is already registered")
        } else {
            this.items.push(building);
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }


  constructor() { }
}

import { Injectable } from '@angular/core';
import { Building } from './building';

@Injectable({
  providedIn: 'root'
})
export class CurrentbuildingService {
  currentBuilding: Building;

  createNew(id){
    // TODO: after API has been implemented: first check if ID is already in system
    this.currentBuilding = new Building();
    this.currentBuilding.id = id;
  }

  constructor() { }
}

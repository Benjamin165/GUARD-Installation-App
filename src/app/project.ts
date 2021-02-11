import { Building } from './building';

export class Project{
    id: string;
    projname: string;
    instcompany: string;
    buildings: Building[];

    addBuilding(building: Building) {
        this.buildings.push(building);
    }

    get(){
        return this.buildings;
      }
    
    peek(){
        return this.buildings[this.buildings.length-1];
      }
}
import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  items: Project[] = [];


    addProject(Project: Project){
        if (this.items.includes(Project)) {
            console.log("Project is already registered")
        } else {
            this.items.push(Project);
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

  constructor() { }
}

import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class CurrentprojectService {
  currentProject: Project;

  createNew(id){
    // TODO: after API has been implemented: first check if ID is already in system
    this.currentProject = new Project();
    this.currentProject.id = id;
  }
  constructor() { }
}

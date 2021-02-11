import { Component, OnInit } from '@angular/core';
import { CurrentdeviceService } from '../currentdevice.service';
import { CurrentprojectService } from '../currentproject.service';
import { Project } from '../project';
import { Building } from '../building';
import { BuildingsService } from '../buildings.service';
import { CurrentbuildingService } from '../currentbuilding.service';

@Component({
  selector: 'app-buildingmeta',
  templateUrl: './buildingmeta.component.html',
  styleUrls: ['./buildingmeta.component.scss']
})
export class BuildingmetaComponent implements OnInit {
  id = 0;
  selectedLevel;
  selectedApplication: string = '';
  applications: any = [
    'rockfall protection system',
    'debris flow protection system',
    'avalanche protection system'
  ];

  constructor(
    public CurDevService: CurrentdeviceService,
    public curproj: CurrentprojectService,
    public curbuild: CurrentbuildingService,
    public buildings: BuildingsService,
    ) { }

  ngOnInit(): void {
  }

  radios = document.getElementsByName('application');
  noneChecked: boolean = true;

  radioChangeHandler (event: any) {
    this.selectedApplication = event.target.value;
    console.log(this.CurDevService.currentDevice.id);
  }


  //momentan wird building erstellt und an projects gehängt: Wenn nun guards an curbuild angehängt werden ist dieser nicht der in der projectslist
  setApplication(){
    this.curbuild.createNew(this.id);
    this.id++;
    this.curbuild.currentBuilding.application = this.selectedApplication;
    this.curbuild.currentBuilding.system = this.selectedLevel;
    this.CurDevService.currentDevice.application = this.selectedApplication;
    this.CurDevService.currentDevice.system = this.selectedLevel;
    this.curproj.currentProject.addBuilding(this.curbuild.currentBuilding);
  }
  
  inputEmpty() {
    return (this.selectedApplication === '' || this.selectedLevel === '');
  }

  

  isRockfallSystem() {
    return this.selectedApplication === 'rockfall protection system'
  }

  isDFSystem() {
    return this.selectedApplication === 'debris flow protection system';
  }

  isAvalancheSystem() {
    return this.selectedApplication === 'avalanche protection system';
  }

  applicationSelected() {
    return this.selectedApplication !== '';
  }


}

import { Component, OnInit } from '@angular/core';
import { CurrentdeviceService } from '../currentdevice.service';

@Component({
  selector: 'app-buildingmeta',
  templateUrl: './buildingmeta.component.html',
  styleUrls: ['./buildingmeta.component.scss']
})
export class BuildingmetaComponent implements OnInit {
  selectedLevel;
  selectedApplication: string = '';
  applications: any = [
    'rockfall protection system',
    'debris flow protection system',
    'avalanche protection system'
  ];

  constructor(
    public CurDevService: CurrentdeviceService,
    ) { }

  ngOnInit(): void {
  }

  radios = document.getElementsByName('application');
  noneChecked: boolean = true;

  radioChangeHandler (event: any) {
    this.selectedApplication = event.target.value;
    console.log(this.CurDevService.currentDevice.id);
  }

  setApplication(){
    this.CurDevService.currentDevice.application = this.selectedApplication;
    this.CurDevService.currentDevice.system = this.selectedLevel;
    console.log(this.CurDevService.currentDevice);
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

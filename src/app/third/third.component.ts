import { Component, OnInit, Input } from '@angular/core';
import { CurrentdeviceService } from '../currentdevice.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  constructor(
    public CurDevService: CurrentdeviceService,
    ) { }
    selectedLevel;
  ngOnInit(): void {
  }

  ropeDiameter: string = '';

  get ropediam(): string {
    return this.ropeDiameter;
  }

  @Input()
  set ropediam(value){
    this.ropeDiameter= value;    
  }

  isRockfallSystem() {
    return this.CurDevService.currentDevice.application === 'rockfall protection system'
  }

  isDFSystem() {
    return this.CurDevService.currentDevice.application === 'debris flow protection system';
  }

  isAvalancheSystem() {
    return this.CurDevService.currentDevice.application === 'avalanche protection system';
  }

  inputEmpty(){
    if (this.selectedLevel === '' || this.ropediam === ''){
      return true;
    }
  }

  selected(){
    console.log(this.selectedLevel);
    console.log(this.inputEmpty());
  }

  submitData(){
    this.CurDevService.currentDevice.system = this.selectedLevel;
    this.CurDevService.currentDevice.ropediam = this.ropediam;
    console.log(this.CurDevService.currentDevice);
  }
}

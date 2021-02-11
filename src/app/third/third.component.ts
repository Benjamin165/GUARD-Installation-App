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

  inputEmpty(){
    if (this.selectedLevel === ''){
      return true;
    }
  }

  selected(){
    console.log(this.selectedLevel);
    console.log(this.inputEmpty());
  }

  submitData(){
    this.CurDevService.currentDevice.ropediam = this.selectedLevel;
    console.log(this.CurDevService.currentDevice);
  }
}

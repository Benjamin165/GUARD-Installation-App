import { Component, OnInit } from '@angular/core';
import { CurrentdeviceService } from '../currentdevice.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  selectedApplication: string = '';
  applications: any = [
    'rockfall protection system',
    'debris flow protection system',
    'avalanche protection system',
    'other'
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
    console.log(this.CurDevService.currentDevice);
  }
  
  inputEmpty() {
    return this.selectedApplication === '';
  }


}

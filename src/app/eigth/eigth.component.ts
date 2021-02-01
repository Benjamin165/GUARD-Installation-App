import { Component, OnInit } from '@angular/core';
import { CurrentdeviceService } from '../currentdevice.service';

@Component({
  selector: 'app-eigth',
  templateUrl: './eigth.component.html',
  styleUrls: ['./eigth.component.scss']
})
export class EigthComponent implements OnInit {

  constructor(
    public device: CurrentdeviceService,
    ) { }

  ngOnInit(): void {
  }
  
  changeValues() {
    this.device.currentDevice.id = document.getElementById('devId').textContent;
    this.device.currentDevice.application = document.getElementById('appl').innerHTML;
    this.device.currentDevice.system = document.getElementById('sys').innerHTML;
    this.device.currentDevice.ropediam = document.getElementById('ropeDia').innerHTML;
    this.device.currentDevice.projname = document.getElementById('projname').innerHTML;
    this.device.currentDevice.instcompany = document.getElementById('company').innerHTML;
    console.log(this.device.currentDevice.id)
  }
}

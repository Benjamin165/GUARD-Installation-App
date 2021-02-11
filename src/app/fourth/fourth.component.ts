import { Component, OnInit, Input } from '@angular/core';
import { CurrentdeviceService } from '../currentdevice.service';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit {

  constructor(
    public CurDevService: CurrentdeviceService,
    ) { }

  ngOnInit(): void {
  }
  instDate: Date;



  get date(): Date {
    return this.instDate;
  }

  @Input()
  set date(value){
    this.instDate= value;    
  }

  submitData(){
    this.CurDevService.currentDevice.dateinst = this.date;
    console.log(this.CurDevService.currentDevice);
  }
  

  inputEmpty(){
    return (this.date === undefined);
  }
}

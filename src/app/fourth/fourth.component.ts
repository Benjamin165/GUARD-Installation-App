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

  projectName: string = '';
  instCompany: string = '';
  instDate: Date;

  get projname(): string {
    return this.projectName;
  }

  get company(): string {
    return this.instCompany;
  }

  get date(): Date {
    return this.instDate;
  }

  @Input()
  set projname(value){
    this.projectName= value;    
  }
  set company(value){
    this.instCompany= value;    
  }
  set date(value){
    this.instDate= value;    
  }

  submitData(){
    this.CurDevService.currentDevice.projname = this.projname;
    this.CurDevService.currentDevice.instcompany = this.company;
    this.CurDevService.currentDevice.dateinst = this.date;
    console.log(this.CurDevService.currentDevice);
  }
  

  inputEmpty(){
    return (this.company === '' || this.projname === '' || this.date === undefined);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { CurrentdeviceService } from '../currentdevice.service';

@Component({
  selector: 'app-projectmeta',
  templateUrl: './projectmeta.component.html',
  styleUrls: ['./projectmeta.component.scss']
})
export class ProjectmetaComponent implements OnInit {

  constructor(
    public CurDevService: CurrentdeviceService,
    ) { }

  ngOnInit(): void {
  }
  projectName: string = '';
  instCompany: string = '';

  get projname(): string {
    return this.projectName;
  }

  get company(): string {
    return this.instCompany;
  }


  @Input()
  set projname(value){
    this.projectName= value;    
  }
  set company(value){
    this.instCompany= value;    
  }

  submitData(){
    this.CurDevService.currentDevice.projname = this.projname;
    this.CurDevService.currentDevice.instcompany = this.company;
    console.log(this.CurDevService.currentDevice);
  }
  

  inputEmpty(){
    return (this.company === '' || this.projname === '');
  }
}


import { Component, OnInit, Input } from '@angular/core';
import { CurrentdeviceService } from '../currentdevice.service';
import { CurrentprojectService } from '../currentproject.service';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projectmeta',
  templateUrl: './projectmeta.component.html',
  styleUrls: ['./projectmeta.component.scss']
})
export class ProjectmetaComponent implements OnInit {
  project = new Project();
  id = 0;
  constructor(
    public CurDevService: CurrentdeviceService,    
    public curproj: CurrentprojectService,
    public projects: ProjectsService,
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

  //fraglich, ob curdevdevice noch zu gebrauchen ist. Alternative: Vererbung
  submitData(){
    this.curproj.createNew(this.id);
    this.id++;
    this.curproj.currentProject.projname = this.projname;
    this.curproj.currentProject.instcompany = this.company;
    this.CurDevService.currentDevice.projname = this.projname;
    this.CurDevService.currentDevice.instcompany = this.company;
    this.projects.addProject(this.curproj.currentProject);
  }
  

  inputEmpty(){
    return (this.company === '' || this.projname === '');
  }
}


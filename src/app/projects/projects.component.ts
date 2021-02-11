import { Component, OnInit } from '@angular/core';
import { CurrentdeviceService } from '../currentdevice.service';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  code: string = 'test-code';
  table = document.getElementById('projectsTable')


  constructor(

    public CurDevService: CurrentdeviceService,
    public projects: ProjectsService,
    ) { }

  ngOnInit(): void {
    for (let p in this.projects.items){
      var tr = document.createElement('tr');
      tr.innerHTML =
      '<td>' + p + '</td>';
      this.table.appendChild(tr);
    }
  }

  initProject(){
    this.CurDevService.createNew(this.code);

  }
}

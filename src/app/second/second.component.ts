import { Component, OnInit } from '@angular/core';
import { CurrentdeviceService } from '../currentdevice.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(
    public CurDevService: CurrentdeviceService,
  ) { }

  ngOnInit(): void {
  }
  radios = document.getElementsByName('application');
  noneChecked: boolean = true;

  noneCheckedTest() {
    //TODO
  }


}

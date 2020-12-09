import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
  }

  isRockfallSystem() {

  }

  isDFSystem() {

  }

  isAvalancheSystem() {

  }

}

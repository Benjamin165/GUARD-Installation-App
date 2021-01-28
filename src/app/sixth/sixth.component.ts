import { Component, OnInit } from '@angular/core';
import { CurrentdeviceService } from '../currentdevice.service';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.scss']
})
export class SixthComponent implements OnInit {

  constructor(
    public CurDevService: CurrentdeviceService,
    ) { }

  ngOnInit(): void {
  }

  isRockfallSystem() {
    return this.CurDevService.currentDevice.application === 'rockfall protection system'
  }

  isDFSystem() {
    return this.CurDevService.currentDevice.application === 'debris flow protection system';
  }

  isAvalancheSystem() {
    return this.CurDevService.currentDevice.application === 'avalanche protection system';
  }

}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UpdateService } from '../update.service';
import { CurrentdeviceService } from '../currentdevice.service';
import { Device } from '../device';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements AfterViewInit {

  constructor(
    private updateService: UpdateService,
    public CurDevService: CurrentdeviceService, 
    ) { }

  ngAfterViewInit(): void {

    setTimeout(() => { // check for updates after 10 seconds
      this.updateService.checkForUpdates();
    }, 10000);
  }

  //TODO: Graphana verknüpfung
}

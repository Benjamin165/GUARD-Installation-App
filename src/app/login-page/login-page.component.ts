import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../update.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private updateService: UpdateService )
    { }

  ngOnInit(): void {
    setTimeout(() => { // check for updates after 10 seconds
      this.updateService.checkForUpdates();
    }, 10000);
  }

}

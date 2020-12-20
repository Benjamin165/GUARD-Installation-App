import { Component, OnInit } from '@angular/core';
import { CurrentdeviceService } from '../currentdevice.service';

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.scss']
})
export class SeventhComponent implements OnInit {

  constructor(
    public CurDevService: CurrentdeviceService,
    ) { }

  ngOnInit(): void {
  }

}

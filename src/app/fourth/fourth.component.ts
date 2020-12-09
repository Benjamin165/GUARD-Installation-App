import { Component, OnInit } from '@angular/core';
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

}

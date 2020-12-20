import { Component, OnInit } from '@angular/core';
import { CurrentdeviceService } from '../currentdevice.service';

@Component({
  selector: 'app-eigth',
  templateUrl: './eigth.component.html',
  styleUrls: ['./eigth.component.scss']
})
export class EigthComponent implements OnInit {

  constructor(
    public CurDevService: CurrentdeviceService,
    ) { }

  ngOnInit(): void {
  }

}

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

}

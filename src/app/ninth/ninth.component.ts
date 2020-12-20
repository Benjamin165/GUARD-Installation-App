import { Component, OnInit } from '@angular/core';
import { CurrentdeviceService } from '../currentdevice.service';

@Component({
  selector: 'app-ninth',
  templateUrl: './ninth.component.html',
  styleUrls: ['./ninth.component.scss']
})
export class NinthComponent implements OnInit {

  constructor(
    public CurDevService: CurrentdeviceService,
    ) { }

  ngOnInit(): void {
  }

}

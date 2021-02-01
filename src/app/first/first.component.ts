import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DevicesToAdd } from '../devicesToAdd';
import { CurrentdeviceService } from '../currentdevice.service';
import { BarcodeFormat } from '@zxing/library';



@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  allowedFormats = [ BarcodeFormat.QR_CODE ]


  toAdd: DevicesToAdd;

  lastScannedCode: string;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public CurDevService: CurrentdeviceService,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(): void {

  }
  onSuccess(result: string) {
    window.alert('Success, scanned ID is: ' + result);
    this.lastScannedCode = result;
    document.getElementById('scanner-wrapper').style.display = 'none';
    document.getElementById('instruction').style.display = 'none';
    document.getElementById('result').style.display = 'inline-block';
    document.getElementById('submit').style.display = 'inline-block';
    document.getElementById('again').style.display = 'inline-block';
    document.getElementById('result').innerHTML = 'Scanned device ID: '  + this.lastScannedCode + '<br>';
  }

  handleError(error: string){
    window.alert(error);
  }

  scanAgain(){    
    document.getElementById('scanner-wrapper').style.display = '';
    document.getElementById('instruction').style.display = '';
    document.getElementById('result').style.display = 'none';
    document.getElementById('again').style.display = 'none';
    document.getElementById('submit').style.display = 'inline-block';
  }

  handleQrCodeResult() {
  // create new guard to Add, todo: check if guard is already in list
  this.CurDevService.createNew(this.lastScannedCode);

}
  //TODO: check if device is sending, give success or error message
}

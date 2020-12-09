import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { BeepService } from '../beep.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DevicesToAdd } from '../devicesToAdd';
import { CurrentdeviceService } from '../currentdevice.service';

import Quagga from 'quagga';
import { Device } from '../device';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements AfterViewInit {

  errorMessage: string;

  toAdd: DevicesToAdd;

  private lastScannedCode: string;
  private lastScannedCodeDate: number;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,    
    private beepService: BeepService,   
    private CurDevService: CurrentdeviceService,
    private route: ActivatedRoute,
  ) { }
  ngAfterViewInit(): void {
    if (!navigator.mediaDevices || !(typeof navigator.mediaDevices.getUserMedia === 'function')) {
      this.errorMessage = 'getUserMedia is not supported';
      return;
    }

  Quagga.init({
    inputStream: {
      constraints: {
        facingMode: 'environment' // restrict camera type
      },
      area: { // defines rectangle of the detection
        top: '40%',    // top offset
        right: '0%',  // right offset
        left: '0%',   // left offset
        bottom: '40%'  // bottom offset
      },
    },
    decoder: {
      readers: ['ean_reader'] // restrict code types
    },
  },
  (err) => {
    if (err) {
      this.errorMessage = `QuaggaJS could not be initialized, err: ${err}`;
    } else {
      Quagga.start();
      Quagga.onProcessed(result => {
        const drawingCanvas = Quagga.canvas.dom.overlay;
        drawingCanvas.style.display = 'none';
        });
      Quagga.onDetected((res) => {
        window.alert(`code: ${res.codeResult.code}`);
      })
    }
  });
}

onBarcodeScanned(code: string) {

  // ignore duplicates for an interval of 1.5 seconds
  const now = new Date().getTime();
  if (code === this.lastScannedCode && (now < this.lastScannedCodeDate + 1500)) {
    return;
  }

  // create new guard to Add, todo: check if guard is already in list
  var device: Device;
  device.id = code;

  this.toAdd.addDevice(device);

  this.lastScannedCode = code;
  this.lastScannedCodeDate = now;
  this.beepService.beep();
  this.changeDetectorRef.detectChanges();
}
  //TODO: check if device is sending, give success or error message
}

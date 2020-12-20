import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';
import { SixthComponent } from './sixth/sixth.component';
import { CurrentdeviceService } from './currentdevice.service';
import { SeventhComponent } from './seventh/seventh.component';
import { EigthComponent } from './eigth/eigth.component';
import { NinthComponent } from './ninth/ninth.component';
import { TenthComponent } from './tenth/tenth.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    FirstComponent,
    SecondComponent,
    PagenotfoundComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent,
    SeventhComponent,
    EigthComponent,
    NinthComponent,
    TenthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
		CommonModule,
		HttpClientModule,
		FormsModule,
    ReactiveFormsModule,
    ZXingScannerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CurrentdeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

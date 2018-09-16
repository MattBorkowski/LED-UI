import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { LedComponent } from './led/led.component';

@NgModule({
  declarations: [
    AppComponent,
    LedComponent
  ],
  imports: [
    BrowserModule,
    ColorPickerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

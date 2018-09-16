import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';
import { LedService } from './led.service';

@Component({
  selector: 'app-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.sass']
})
export class LedComponent implements OnInit {
  color:string;
  setColors: string[];

  constructor( private ledService: LedService) {
   }

  ngOnInit() {
    this.color = 'rgba(255,255,255,1)';
  }

  public onColorChange(){
    let temp = this.color.split(",")
    temp[0] = temp[0].split("(")[1];
    this.setColors = temp;
  }

  public setColor(){
    this.onColorChange();
    this.ledService.setColor(this.setColors)
    .subscribe();
  }

}

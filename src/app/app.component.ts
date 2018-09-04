import { Component, EventEmitter, Output } from '@angular/core';
import { ColorPickerModule } from 'ngx-color-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  color:string = 'rgba(255,255,255,1)';
  title = 'led';

  onColorChange(){
    let temp = this.color.split(",")
    temp[0] = temp[0].split("(")[1];
    console.log(temp);
  }
}
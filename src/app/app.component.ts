import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-form';
  value: string = '';
  isChecked: boolean = false;

  showText(value: string) {
    this.value = value;
  }

  isItChecked() {
    if(this.isChecked) {
      
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  name = 'Pako';
  age = 37;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
}

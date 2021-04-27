import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Waqas';

  constructor() {
    this.changeName("Faizan")
  }

  changeName(name:string):void {
    this.name = name;
  }


}

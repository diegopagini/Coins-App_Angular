import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() emitingData = new EventEmitter();

  currentName: string = this.emitingData.name

  title = 'CoinsApp';
}

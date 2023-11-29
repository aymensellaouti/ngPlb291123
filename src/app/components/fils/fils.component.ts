import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {

  // 1 créer un event
  @Output()
  sendDataToData = new EventEmitter<string>();

  // 2 Emettre l'evenement
  sendData() {
    this.sendDataToData.emit('cc papa');
  }
}

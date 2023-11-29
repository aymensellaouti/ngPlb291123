import { Component } from '@angular/core';

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.css']
})
export class LampeComponent {
  isAllume = true;

  interrupteur() {
    this.isAllume = !this.isAllume
  }
}

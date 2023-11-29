import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  defaultColor = 'red';
  color = this.defaultColor;

  changeColor(input: HTMLInputElement) {
    this.color = input.value;
    input.value = '';
  };

  reset() {
    this.color = this.defaultColor;
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  ngOnInit(): void {
    this.color = this.defaultColor;
  }
  @Input() defaultColor = 'red';
  color = '';

  changeColor(input: HTMLInputElement) {
    this.color = input.value;
    input.value = '';
  };

  reset() {
    this.color = this.defaultColor;
  }
}

import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[rainbow],textarea[rainbow]',
})
export class RainbowDirective {
  // qu'est ce qu'on veut controler
  @HostBinding('style.color') color = '';
  @HostBinding('style.borderColor') bc = '';
  constructor() {}

  // Quel event gérer et quoi faire ?
  @HostListener('keyup') onKeyUp() {
    this.bc =  this.getRandomColor();
    this.color = this.getRandomColor();
  }
  private getRandomColor(): string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}

import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() in = 'yellow';
  @Input() out = 'red';
  // Je prend controle du backgroundColor de mon Hote
  @HostBinding('style.backgroundColor') bg = '';
  constructor() {
    //console.log('cc');
  }
  ngOnInit(): void {
    this.bg = this.out;
  }
  // a chaque mouseenter de mon hote j'applique le comportement
  // de la méthode onMouseEnter
  @HostListener('mouseenter') onMouseEnter() {
    this.bg = this.in;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bg = this.out;
  }
}

import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() in = 'yellow';
  @Input() out = 'red';
  // Je prend controle du backgroundColor de mon Hote
  @HostBinding('style.backgroundColor') bg = '';
  constructor(private elementRef: ElementRef) {
    //console.log('cc');
  }
  ngOnInit(): void {
    this.bg = this.out;
  }
  // a chaque mouseenter de mon hote j'applique le comportement
  // de la méthode onMouseEnter
  @HostListener('mouseenter') onMouseEnter() {
    this.bg = this.in;
    //this.elementRef.nativeElement.innerHTML = '<h2>IN</h2>';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.bg = this.out;
    //this.elementRef.nativeElement.innerHTML = '<h2>OUT</h2>';
  }
}

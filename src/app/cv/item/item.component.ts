import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input({required: true}) cv!: Cv;
  @Output() selectCv = new EventEmitter<Cv>();


  // Elle emettre un evenement en cas de selection du cv
  onSelectCv() {
    this.selectCv.emit(this.cv);
  }
}

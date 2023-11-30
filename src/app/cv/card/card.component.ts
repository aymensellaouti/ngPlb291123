import { Component, Input, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input({required: true}) cv: Cv | null = null;
  private embaucheService = inject(EmbaucheService);
  private toaster = inject(ToastrService);
  embaucher() {
    if (this.cv) {
      if (this.embaucheService.embaucher(this.cv)) {
        this.toaster.success(`${this.cv.firstname} ${this.cv.name} a été préselectionné avec succès`)
      } else {
        this.toaster.warning(`${this.cv.firstname} ${this.cv.name} est déjà préselectionné`)
      }
    }
  }
}

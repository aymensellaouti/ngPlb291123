import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  private embaucheService: EmbaucheService = inject(EmbaucheService);
  embauchees: Cv[] = [];

  constructor() {
    this.embauchees = this.embaucheService.getCvs();
  }

}

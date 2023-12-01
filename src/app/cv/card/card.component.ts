import { Component, Input, OnDestroy, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnDestroy{
  @Input() cv: Cv | null = null;
  subject = new Subject();
  private embaucheService = inject(EmbaucheService);
  private toaster = inject(ToastrService);
  private cvService = inject(CvService);
  constructor() {
    this.cvService.selectCv$
    .pipe(
      takeUntil(this.subject)
    )
    .subscribe(
      (cv) => this.cv = cv
    )
  }
  ngOnDestroy(): void {
    this.subject.next('je complete tout mes observateurs');
    this.subject.complete();
  }
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

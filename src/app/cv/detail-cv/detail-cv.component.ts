import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/config/routes.config';
import { EMPTY, Observable, catchError } from 'rxjs';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {
  cv$: Observable<Cv> ;

  constructor(
    private cvService: CvService,
    private acr: ActivatedRoute,
    private router: Router,
  ) {
    const id = this.acr.snapshot.params['id'];
    this.cv$ = this.cvService.getCvById(id)
    .pipe(
      catchError(e => {
        this.router.navigate([APP_ROUTES.cv]);
        return EMPTY;
      })
    );
  }
  deleteCv(cv: Cv) {
      this.cvService.deleteCvById(cv.id).subscribe({
        next: (ok) => {
          this.router.navigate([APP_ROUTES.cv]);
        },
        error: (erreur) => {console.log(erreur);
        }
      });
  }
}

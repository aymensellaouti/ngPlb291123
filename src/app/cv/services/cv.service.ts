import { Injectable, inject } from '@angular/core';
import { Cv } from '../model/cv.model';
import { Observable, Subject, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  private selectCvSubject = new Subject<Cv>();
  selectCv$ = this.selectCvSubject.asObservable();
  http = inject(HttpClient);
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 41, 'teacher', '', '1111'),
      new Cv(2, 'sellaouti', 'skander', 5, 'enfant', '      ', '4444'),
    ];
  }
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(API.cv).pipe(
      retry({count: 4, delay: 1000})
    );
  }

  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  /**
   * Retourne true si l'élément est supprimé, false sinon
   *
   * @param cv: Cv
   * @returns boolean
   */
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index > -1) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }

  /**
   *
   * @param id Récupére le cv par son id via l'API
   * @returns
   */
  getCvById(id: number): Observable<Cv>{
    return this.http.get<Cv>(API.cv + id);
  }

  /**
   *
   * @param id supprime le cv par son id via l'API
   * @returns
   */
  deleteCvById(id: number): Observable<Cv>{
    return this.http.delete<Cv>(API.cv + id);
  }

  /**
   * Retourne le cv via son id false sinon
   *
   * @param id: number
   * @returns boolean
   */
  getFakeCvById(id: number): Cv | null {
    // Todo : Récupérer le Cv via son Id
    return this.cvs.find((cv) => cv.id === +id) ?? null;
  }

  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }
}

import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  getCvs(): Cv[] {
    return this.cvs;
  }

  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 41, 'teacher', '', '1111'),
      new Cv(2, 'sellaouti', 'skander', 5, 'enfant', '      ', '4444'),
    ];
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
   * Retourne le cv via son id false sinon
   *
   * @param id: number
   * @returns boolean
   */
  getCvById(id: number): Cv | null {
    // Todo : Récupérer le Cv via son Id
    return this.cvs.find((cv) => cv.id === +id) ?? null;
  }
}

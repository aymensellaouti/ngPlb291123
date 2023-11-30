import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private embuachees: Cv[] = [];
  constructor() {}
  getCvs(): Cv[] {
    return this.embuachees;
  }
  embaucher(cv: Cv): boolean {
    const index = this.embuachees.indexOf(cv);
    if (index < 0) {
      this.embuachees.push(cv);
      return true;
    }
    return false;
  }
}

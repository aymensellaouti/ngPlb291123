import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root'
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
}

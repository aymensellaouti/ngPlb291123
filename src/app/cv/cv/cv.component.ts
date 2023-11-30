import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv!: Cv;
  date = new Date();
  cvs: Cv[] = [
    new Cv(
      1,
      'sellaouti',
      'aymen',
      41,
      'teacher',
      '',
      '1111'
    ),
    new Cv(
      2,
      'sellaouti',
      'skander',
      5,
      'enfant',
      '      ',
      '4444'
    ),
  ];

  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}

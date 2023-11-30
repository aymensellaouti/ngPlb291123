import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/sayHello.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv!: Cv;
  //  L'instantiation direct va provoquer un couplage Fort
  //  sayHelloService = new SayHelloService();
  date = new Date();
  cvs: Cv[] = [
    new Cv(1, 'sellaouti', 'aymen', 41, 'teacher', '', '1111'),
    new Cv(2, 'sellaouti', 'skander', 5, 'enfant', '      ', '4444'),
  ];
  // J'ai demandé à mon injecteur de me fournir
  // La dépendance LoggerService
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService
  ) {
    this.sayHelloService.hello();
    this.loggerService.logger('cc je suis le cvComponent');

  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
  }
}

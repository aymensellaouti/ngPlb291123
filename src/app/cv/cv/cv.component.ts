import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';
import { LoggerService } from 'src/app/services/logger.service';
import { SayHelloService } from 'src/app/services/sayHello.service';
import { TodoService } from 'src/app/todo/services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  selectedCv!: Cv;
  nbClick = 0;
  //  L'instantiation direct va provoquer un couplage Fort
  //  sayHelloService = new SayHelloService();
  date = new Date();
  cvs: Cv[] = [];
  // J'ai demandé à mon injecteur de me fournir
  // La dépendance LoggerService
  constructor(
    private loggerService: LoggerService,
    private sayHelloService: SayHelloService,
    private todoService: TodoService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    this.cvs = this.cvService.getCvs();
    this.sayHelloService.hello();
    // Chaque fois que quelqu'un click sur un console.clear()
    // On incrémente le nbre de click
    this.cvService.selectCv$
    .pipe(
      distinctUntilChanged(),
      takeUntilDestroyed()
    )
    .subscribe(
      () => this.nbClick++
    )
    this.toastr.info('Bienvenu dans notre CvTech');
    this.loggerService.logger('cc je suis le cvComponent');
  }
  getSelectedCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.logTodos();
  }
}
